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
 * @interface ServiceProxyErrorRespModel
 */
export interface ServiceProxyErrorRespModel {
    /**
     * 
     * @type {string}
     * @memberof ServiceProxyErrorRespModel
     */
    errorMsg?: string;
}

/**
 * Check if a given object implements the ServiceProxyErrorRespModel interface.
 */
export function instanceOfServiceProxyErrorRespModel(value: object): value is ServiceProxyErrorRespModel {
    return true;
}

export function ServiceProxyErrorRespModelFromJSON(json: any): ServiceProxyErrorRespModel {
    return ServiceProxyErrorRespModelFromJSONTyped(json, false);
}

export function ServiceProxyErrorRespModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceProxyErrorRespModel {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMsg': json['error_msg'] == null ? undefined : json['error_msg'],
    };
}

export function ServiceProxyErrorRespModelToJSON(json: any): ServiceProxyErrorRespModel {
    return ServiceProxyErrorRespModelToJSONTyped(json, false);
}

export function ServiceProxyErrorRespModelToJSONTyped(value?: ServiceProxyErrorRespModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error_msg': value['errorMsg'],
    };
}

