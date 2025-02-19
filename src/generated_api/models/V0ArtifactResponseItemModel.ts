/* tslint:disable */
/* eslint-disable */
/**
 * Bitrise API
 * Official REST API for Bitrise.io
 *
 * The version of the OpenAPI document: 0.1
 * Contact: letsconnect@bitrise.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V0ArtifactResponseItemModel
 */
export interface V0ArtifactResponseItemModel {
    /**
     * 
     * @type {object}
     * @memberof V0ArtifactResponseItemModel
     */
    artifactMeta?: object;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactResponseItemModel
     */
    artifactType?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactResponseItemModel
     */
    expiringDownloadUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof V0ArtifactResponseItemModel
     */
    fileSizeBytes?: number;
    /**
     * 
     * @type {object}
     * @memberof V0ArtifactResponseItemModel
     */
    intermediateFileInfo?: object;
    /**
     * 
     * @type {boolean}
     * @memberof V0ArtifactResponseItemModel
     */
    isPublicPageEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactResponseItemModel
     */
    publicInstallPageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactResponseItemModel
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactResponseItemModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0ArtifactResponseItemModel interface.
 */
export function instanceOfV0ArtifactResponseItemModel(value: object): value is V0ArtifactResponseItemModel {
    return true;
}

export function V0ArtifactResponseItemModelFromJSON(json: any): V0ArtifactResponseItemModel {
    return V0ArtifactResponseItemModelFromJSONTyped(json, false);
}

export function V0ArtifactResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArtifactResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'artifactMeta': json['artifact_meta'] == null ? undefined : json['artifact_meta'],
        'artifactType': json['artifact_type'] == null ? undefined : json['artifact_type'],
        'expiringDownloadUrl': json['expiring_download_url'] == null ? undefined : json['expiring_download_url'],
        'fileSizeBytes': json['file_size_bytes'] == null ? undefined : json['file_size_bytes'],
        'intermediateFileInfo': json['intermediate_file_info'] == null ? undefined : json['intermediate_file_info'],
        'isPublicPageEnabled': json['is_public_page_enabled'] == null ? undefined : json['is_public_page_enabled'],
        'publicInstallPageUrl': json['public_install_page_url'] == null ? undefined : json['public_install_page_url'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0ArtifactResponseItemModelToJSON(json: any): V0ArtifactResponseItemModel {
    return V0ArtifactResponseItemModelToJSONTyped(json, false);
}

export function V0ArtifactResponseItemModelToJSONTyped(value?: V0ArtifactResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'artifact_meta': value['artifactMeta'],
        'artifact_type': value['artifactType'],
        'expiring_download_url': value['expiringDownloadUrl'],
        'file_size_bytes': value['fileSizeBytes'],
        'intermediate_file_info': value['intermediateFileInfo'],
        'is_public_page_enabled': value['isPublicPageEnabled'],
        'public_install_page_url': value['publicInstallPageUrl'],
        'slug': value['slug'],
        'title': value['title'],
    };
}

