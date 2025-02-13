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
import type { V0ArtifactListElementResponseModel } from './V0ArtifactListElementResponseModel';
import {
    V0ArtifactListElementResponseModelFromJSON,
    V0ArtifactListElementResponseModelFromJSONTyped,
    V0ArtifactListElementResponseModelToJSON,
    V0ArtifactListElementResponseModelToJSONTyped,
} from './V0ArtifactListElementResponseModel';

/**
 * 
 * @export
 * @interface V0ArtifactListResponseModel
 */
export interface V0ArtifactListResponseModel {
    /**
     * 
     * @type {Array<V0ArtifactListElementResponseModel>}
     * @memberof V0ArtifactListResponseModel
     */
    data?: Array<V0ArtifactListElementResponseModel>;
    /**
     * pagination
     * @type {V0PagingResponseModel}
     * @memberof V0ArtifactListResponseModel
     */
    paging?: V0PagingResponseModel;
}

/**
 * Check if a given object implements the V0ArtifactListResponseModel interface.
 */
export function instanceOfV0ArtifactListResponseModel(value: object): value is V0ArtifactListResponseModel {
    return true;
}

export function V0ArtifactListResponseModelFromJSON(json: any): V0ArtifactListResponseModel {
    return V0ArtifactListResponseModelFromJSONTyped(json, false);
}

export function V0ArtifactListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArtifactListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0ArtifactListElementResponseModelFromJSON)),
        'paging': json['paging'] == null ? undefined : V0PagingResponseModelFromJSON(json['paging']),
    };
}

export function V0ArtifactListResponseModelToJSON(json: any): V0ArtifactListResponseModel {
    return V0ArtifactListResponseModelToJSONTyped(json, false);
}

export function V0ArtifactListResponseModelToJSONTyped(value?: V0ArtifactListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0ArtifactListElementResponseModelToJSON)),
        'paging': V0PagingResponseModelToJSON(value['paging']),
    };
}

