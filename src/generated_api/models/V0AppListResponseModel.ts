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
import type { V0AppResponseItemModel } from './V0AppResponseItemModel';
import {
    V0AppResponseItemModelFromJSON,
    V0AppResponseItemModelFromJSONTyped,
    V0AppResponseItemModelToJSON,
    V0AppResponseItemModelToJSONTyped,
} from './V0AppResponseItemModel';

/**
 * 
 * @export
 * @interface V0AppListResponseModel
 */
export interface V0AppListResponseModel {
    /**
     * 
     * @type {Array<V0AppResponseItemModel>}
     * @memberof V0AppListResponseModel
     */
    data?: Array<V0AppResponseItemModel>;
    /**
     * pagination
     * @type {V0PagingResponseModel}
     * @memberof V0AppListResponseModel
     */
    paging?: V0PagingResponseModel;
}

/**
 * Check if a given object implements the V0AppListResponseModel interface.
 */
export function instanceOfV0AppListResponseModel(value: object): value is V0AppListResponseModel {
    return true;
}

export function V0AppListResponseModelFromJSON(json: any): V0AppListResponseModel {
    return V0AppListResponseModelFromJSONTyped(json, false);
}

export function V0AppListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0AppListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0AppResponseItemModelFromJSON)),
        'paging': json['paging'] == null ? undefined : V0PagingResponseModelFromJSON(json['paging']),
    };
}

export function V0AppListResponseModelToJSON(json: any): V0AppListResponseModel {
    return V0AppListResponseModelToJSONTyped(json, false);
}

export function V0AppListResponseModelToJSONTyped(value?: V0AppListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0AppResponseItemModelToJSON)),
        'paging': V0PagingResponseModelToJSON(value['paging']),
    };
}

