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
import type { V0AddOnAppResponseItemModel } from './V0AddOnAppResponseItemModel';
import {
    V0AddOnAppResponseItemModelFromJSON,
    V0AddOnAppResponseItemModelFromJSONTyped,
    V0AddOnAppResponseItemModelToJSON,
    V0AddOnAppResponseItemModelToJSONTyped,
} from './V0AddOnAppResponseItemModel';

/**
 * 
 * @export
 * @interface V0OwnerAddOnResponseItemModel
 */
export interface V0OwnerAddOnResponseItemModel {
    /**
     * 
     * @type {Array<V0AddOnAppResponseItemModel>}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    apps?: Array<V0AddOnAppResponseItemModel>;
    /**
     * 
     * @type {string}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    documentationUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    hasUi?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    isBeta?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof V0OwnerAddOnResponseItemModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0OwnerAddOnResponseItemModel interface.
 */
export function instanceOfV0OwnerAddOnResponseItemModel(value: object): value is V0OwnerAddOnResponseItemModel {
    return true;
}

export function V0OwnerAddOnResponseItemModelFromJSON(json: any): V0OwnerAddOnResponseItemModel {
    return V0OwnerAddOnResponseItemModelFromJSONTyped(json, false);
}

export function V0OwnerAddOnResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0OwnerAddOnResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'apps': json['apps'] == null ? undefined : ((json['apps'] as Array<any>).map(V0AddOnAppResponseItemModelFromJSON)),
        'documentationUrl': json['documentation_url'] == null ? undefined : json['documentation_url'],
        'hasUi': json['has_ui'] == null ? undefined : json['has_ui'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'id': json['id'] == null ? undefined : json['id'],
        'isBeta': json['is_beta'] == null ? undefined : json['is_beta'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0OwnerAddOnResponseItemModelToJSON(json: any): V0OwnerAddOnResponseItemModel {
    return V0OwnerAddOnResponseItemModelToJSONTyped(json, false);
}

export function V0OwnerAddOnResponseItemModelToJSONTyped(value?: V0OwnerAddOnResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apps': value['apps'] == null ? undefined : ((value['apps'] as Array<any>).map(V0AddOnAppResponseItemModelToJSON)),
        'documentation_url': value['documentationUrl'],
        'has_ui': value['hasUi'],
        'icon': value['icon'],
        'id': value['id'],
        'is_beta': value['isBeta'],
        'summary': value['summary'],
        'title': value['title'],
    };
}

