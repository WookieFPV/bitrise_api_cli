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
import type { AddonsFeature } from './AddonsFeature';
import {
    AddonsFeatureFromJSON,
    AddonsFeatureFromJSONTyped,
    AddonsFeatureToJSON,
    AddonsFeatureToJSONTyped,
} from './AddonsFeature';

/**
 * 
 * @export
 * @interface AddonsPlan
 */
export interface AddonsPlan {
    /**
     * 
     * @type {Array<AddonsFeature>}
     * @memberof AddonsPlan
     */
    features?: Array<AddonsFeature>;
    /**
     * 
     * @type {string}
     * @memberof AddonsPlan
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonsPlan
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AddonsPlan
     */
    price?: number;
}

/**
 * Check if a given object implements the AddonsPlan interface.
 */
export function instanceOfAddonsPlan(value: object): value is AddonsPlan {
    return true;
}

export function AddonsPlanFromJSON(json: any): AddonsPlan {
    return AddonsPlanFromJSONTyped(json, false);
}

export function AddonsPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddonsPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'features': json['features'] == null ? undefined : ((json['features'] as Array<any>).map(AddonsFeatureFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'price': json['price'] == null ? undefined : json['price'],
    };
}

export function AddonsPlanToJSON(json: any): AddonsPlan {
    return AddonsPlanToJSONTyped(json, false);
}

export function AddonsPlanToJSONTyped(value?: AddonsPlan | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'features': value['features'] == null ? undefined : ((value['features'] as Array<any>).map(AddonsFeatureToJSON)),
        'id': value['id'],
        'name': value['name'],
        'price': value['price'],
    };
}

