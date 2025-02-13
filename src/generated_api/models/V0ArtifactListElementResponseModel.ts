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
 * @interface V0ArtifactListElementResponseModel
 */
export interface V0ArtifactListElementResponseModel {
    /**
     * 
     * @type {object}
     * @memberof V0ArtifactListElementResponseModel
     */
    artifactMeta?: object;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactListElementResponseModel
     */
    artifactType?: string;
    /**
     * 
     * @type {number}
     * @memberof V0ArtifactListElementResponseModel
     */
    fileSizeBytes?: number;
    /**
     * 
     * @type {object}
     * @memberof V0ArtifactListElementResponseModel
     */
    intermediateFileInfo?: object;
    /**
     * 
     * @type {boolean}
     * @memberof V0ArtifactListElementResponseModel
     */
    isPublicPageEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactListElementResponseModel
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArtifactListElementResponseModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0ArtifactListElementResponseModel interface.
 */
export function instanceOfV0ArtifactListElementResponseModel(value: object): value is V0ArtifactListElementResponseModel {
    return true;
}

export function V0ArtifactListElementResponseModelFromJSON(json: any): V0ArtifactListElementResponseModel {
    return V0ArtifactListElementResponseModelFromJSONTyped(json, false);
}

export function V0ArtifactListElementResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArtifactListElementResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'artifactMeta': json['artifact_meta'] == null ? undefined : json['artifact_meta'],
        'artifactType': json['artifact_type'] == null ? undefined : json['artifact_type'],
        'fileSizeBytes': json['file_size_bytes'] == null ? undefined : json['file_size_bytes'],
        'intermediateFileInfo': json['intermediate_file_info'] == null ? undefined : json['intermediate_file_info'],
        'isPublicPageEnabled': json['is_public_page_enabled'] == null ? undefined : json['is_public_page_enabled'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0ArtifactListElementResponseModelToJSON(json: any): V0ArtifactListElementResponseModel {
    return V0ArtifactListElementResponseModelToJSONTyped(json, false);
}

export function V0ArtifactListElementResponseModelToJSONTyped(value?: V0ArtifactListElementResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'artifact_meta': value['artifactMeta'],
        'artifact_type': value['artifactType'],
        'file_size_bytes': value['fileSizeBytes'],
        'intermediate_file_info': value['intermediateFileInfo'],
        'is_public_page_enabled': value['isPublicPageEnabled'],
        'slug': value['slug'],
        'title': value['title'],
    };
}

