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
 * @interface V0BranchListResponseModel
 */
export interface V0BranchListResponseModel {
    /**
     * 
     * @type {Array<string>}
     * @memberof V0BranchListResponseModel
     */
    data?: Array<string>;
}

/**
 * Check if a given object implements the V0BranchListResponseModel interface.
 */
export function instanceOfV0BranchListResponseModel(value: object): value is V0BranchListResponseModel {
    return true;
}

export function V0BranchListResponseModelFromJSON(json: any): V0BranchListResponseModel {
    return V0BranchListResponseModelFromJSONTyped(json, false);
}

export function V0BranchListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BranchListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : json['data'],
    };
}

export function V0BranchListResponseModelToJSON(json: any): V0BranchListResponseModel {
    return V0BranchListResponseModelToJSONTyped(json, false);
}

export function V0BranchListResponseModelToJSONTyped(value?: V0BranchListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'],
    };
}

