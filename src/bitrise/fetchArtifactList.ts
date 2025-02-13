import { api } from "@/bitrise/api";
import { ENV } from "./env";

export const fetchArtifactList = async (buildSlug: string) => {
    const { data } = await api.buildArtifact().artifactList({ appSlug: ENV.appSlug, buildSlug });
    if (!data) throw new Error("buildArtifact().artifactList returned no data");
    return data;
};
