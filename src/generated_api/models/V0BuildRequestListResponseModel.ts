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
import type { V0BuildRequestResponseItemModel } from './V0BuildRequestResponseItemModel';
import {
    V0BuildRequestResponseItemModelFromJSON,
    V0BuildRequestResponseItemModelFromJSONTyped,
    V0BuildRequestResponseItemModelToJSON,
    V0BuildRequestResponseItemModelToJSONTyped,
} from './V0BuildRequestResponseItemModel';

/**
 * 
 * @export
 * @interface V0BuildRequestListResponseModel
 */
export interface V0BuildRequestListResponseModel {
    /**
     * 
     * @type {Array<V0BuildRequestResponseItemModel>}
     * @memberof V0BuildRequestListResponseModel
     */
    data?: Array<V0BuildRequestResponseItemModel>;
}

/**
 * Check if a given object implements the V0BuildRequestListResponseModel interface.
 */
export function instanceOfV0BuildRequestListResponseModel(value: object): value is V0BuildRequestListResponseModel {
    return true;
}

export function V0BuildRequestListResponseModelFromJSON(json: any): V0BuildRequestListResponseModel {
    return V0BuildRequestListResponseModelFromJSONTyped(json, false);
}

export function V0BuildRequestListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildRequestListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0BuildRequestResponseItemModelFromJSON)),
    };
}

export function V0BuildRequestListResponseModelToJSON(json: any): V0BuildRequestListResponseModel {
    return V0BuildRequestListResponseModelToJSONTyped(json, false);
}

export function V0BuildRequestListResponseModelToJSONTyped(value?: V0BuildRequestListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0BuildRequestResponseItemModelToJSON)),
    };
}

