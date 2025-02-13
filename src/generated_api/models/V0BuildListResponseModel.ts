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
import type { V0PagingResponseModel } from './V0PagingResponseModel';
import {
    V0PagingResponseModelFromJSON,
    V0PagingResponseModelFromJSONTyped,
    V0PagingResponseModelToJSON,
    V0PagingResponseModelToJSONTyped,
} from './V0PagingResponseModel';
import type { V0BuildResponseItemModel } from './V0BuildResponseItemModel';
import {
    V0BuildResponseItemModelFromJSON,
    V0BuildResponseItemModelFromJSONTyped,
    V0BuildResponseItemModelToJSON,
    V0BuildResponseItemModelToJSONTyped,
} from './V0BuildResponseItemModel';

/**
 * 
 * @export
 * @interface V0BuildListResponseModel
 */
export interface V0BuildListResponseModel {
    /**
     * 
     * @type {Array<V0BuildResponseItemModel>}
     * @memberof V0BuildListResponseModel
     */
    data?: Array<V0BuildResponseItemModel>;
    /**
     * pagination
     * @type {V0PagingResponseModel}
     * @memberof V0BuildListResponseModel
     */
    paging?: V0PagingResponseModel;
}

/**
 * Check if a given object implements the V0BuildListResponseModel interface.
 */
export function instanceOfV0BuildListResponseModel(value: object): value is V0BuildListResponseModel {
    return true;
}

export function V0BuildListResponseModelFromJSON(json: any): V0BuildListResponseModel {
    return V0BuildListResponseModelFromJSONTyped(json, false);
}

export function V0BuildListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0BuildResponseItemModelFromJSON)),
        'paging': json['paging'] == null ? undefined : V0PagingResponseModelFromJSON(json['paging']),
    };
}

export function V0BuildListResponseModelToJSON(json: any): V0BuildListResponseModel {
    return V0BuildListResponseModelToJSONTyped(json, false);
}

export function V0BuildListResponseModelToJSONTyped(value?: V0BuildListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0BuildResponseItemModelToJSON)),
        'paging': V0PagingResponseModelToJSON(value['paging']),
    };
}

