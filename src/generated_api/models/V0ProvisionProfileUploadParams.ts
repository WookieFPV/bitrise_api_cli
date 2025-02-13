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
 * @interface V0ProvisionProfileUploadParams
 */
export interface V0ProvisionProfileUploadParams {
    /**
     * 
     * @type {string}
     * @memberof V0ProvisionProfileUploadParams
     */
    uploadFileName: string;
    /**
     * 
     * @type {number}
     * @memberof V0ProvisionProfileUploadParams
     */
    uploadFileSize: number;
}

/**
 * Check if a given object implements the V0ProvisionProfileUploadParams interface.
 */
export function instanceOfV0ProvisionProfileUploadParams(value: object): value is V0ProvisionProfileUploadParams {
    if (!('uploadFileName' in value) || value['uploadFileName'] === undefined) return false;
    if (!('uploadFileSize' in value) || value['uploadFileSize'] === undefined) return false;
    return true;
}

export function V0ProvisionProfileUploadParamsFromJSON(json: any): V0ProvisionProfileUploadParams {
    return V0ProvisionProfileUploadParamsFromJSONTyped(json, false);
}

export function V0ProvisionProfileUploadParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ProvisionProfileUploadParams {
    if (json == null) {
        return json;
    }
    return {
        
        'uploadFileName': json['upload_file_name'],
        'uploadFileSize': json['upload_file_size'],
    };
}

export function V0ProvisionProfileUploadParamsToJSON(json: any): V0ProvisionProfileUploadParams {
    return V0ProvisionProfileUploadParamsToJSONTyped(json, false);
}

export function V0ProvisionProfileUploadParamsToJSONTyped(value?: V0ProvisionProfileUploadParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'upload_file_name': value['uploadFileName'],
        'upload_file_size': value['uploadFileSize'],
    };
}

