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
 * @interface V0ProjectFileStorageUploadParams
 */
export interface V0ProjectFileStorageUploadParams {
    /**
     * 
     * @type {string}
     * @memberof V0ProjectFileStorageUploadParams
     */
    uploadFileName: string;
    /**
     * 
     * @type {number}
     * @memberof V0ProjectFileStorageUploadParams
     */
    uploadFileSize: number;
    /**
     * 
     * @type {string}
     * @memberof V0ProjectFileStorageUploadParams
     */
    userEnvKey: string;
}

/**
 * Check if a given object implements the V0ProjectFileStorageUploadParams interface.
 */
export function instanceOfV0ProjectFileStorageUploadParams(value: object): value is V0ProjectFileStorageUploadParams {
    if (!('uploadFileName' in value) || value['uploadFileName'] === undefined) return false;
    if (!('uploadFileSize' in value) || value['uploadFileSize'] === undefined) return false;
    if (!('userEnvKey' in value) || value['userEnvKey'] === undefined) return false;
    return true;
}

export function V0ProjectFileStorageUploadParamsFromJSON(json: any): V0ProjectFileStorageUploadParams {
    return V0ProjectFileStorageUploadParamsFromJSONTyped(json, false);
}

export function V0ProjectFileStorageUploadParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ProjectFileStorageUploadParams {
    if (json == null) {
        return json;
    }
    return {
        
        'uploadFileName': json['upload_file_name'],
        'uploadFileSize': json['upload_file_size'],
        'userEnvKey': json['user_env_key'],
    };
}

export function V0ProjectFileStorageUploadParamsToJSON(json: any): V0ProjectFileStorageUploadParams {
    return V0ProjectFileStorageUploadParamsToJSONTyped(json, false);
}

export function V0ProjectFileStorageUploadParamsToJSONTyped(value?: V0ProjectFileStorageUploadParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'upload_file_name': value['uploadFileName'],
        'upload_file_size': value['uploadFileSize'],
        'user_env_key': value['userEnvKey'],
    };
}

