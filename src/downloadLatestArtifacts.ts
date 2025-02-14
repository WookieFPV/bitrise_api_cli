import { fetchArtifact } from "@/bitrise/fetchArtifact";
import { formatBytes } from "@/helper/formatBytes";
import { ADB } from "appium-adb";
import { oraPromise } from "ora";
import { isEnvValid, saveOptions } from "./bitrise/env";
import { fetchArtifactByType } from "./bitrise/fetchArtifactList";
import { getLatestBuild } from "./bitrise/fetchBuilds";
import type { CliOptions } from "./cliOptions.types";
import { downloadFile } from "./helper/downloadFile";

export const downloadLatestArtifacts = async (options: CliOptions) => {
    saveOptions(options);
    if (!isEnvValid()) return process.exit(1);

    const latestBuild = await oraPromise(getLatestBuild(options), {
        text: "fetching latest build",
        failText: (error) => `fetching latest build failed with error: ${error}`,
    });
    if (!latestBuild.slug) throw Error("Latest build contained no Slug");

    const artifactMetadata = await oraPromise(fetchArtifactByType(latestBuild.slug), {
        text: "fetching artifact list",
        failText: (error) => `fetching artifact list failed with error: ${error}`,
    });
    if (!artifactMetadata.slug || !artifactMetadata.title) throw Error("Artifact was Invalid");

    const artifact = await oraPromise(
        fetchArtifact({ artifactSlug: artifactMetadata.slug, buildSlug: latestBuild.slug }),
        { text: "fetching artifact metadata" },
    );
    if (!artifact.expiringDownloadUrl) throw Error("Artifact is missing expiringDownloadUrl");

    const fileSize = formatBytes(artifact.fileSizeBytes ?? 0);
    await oraPromise(downloadFile(artifact.expiringDownloadUrl, artifactMetadata.title), {
        text: `downloading apk file (${fileSize})`,
        successText: ({ duration }) => `downloading apk file took ${duration}ms`,
    });
};
