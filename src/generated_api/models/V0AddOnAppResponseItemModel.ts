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
import type { AddonsPlan } from './AddonsPlan';
import {
    AddonsPlanFromJSON,
    AddonsPlanFromJSONTyped,
    AddonsPlanToJSON,
    AddonsPlanToJSONTyped,
} from './AddonsPlan';

/**
 * 
 * @export
 * @interface V0AddOnAppResponseItemModel
 */
export interface V0AddOnAppResponseItemModel {
    /**
     * 
     * @type {string}
     * @memberof V0AddOnAppResponseItemModel
     */
    icon?: string;
    /**
     * 
     * @type {AddonsPlan}
     * @memberof V0AddOnAppResponseItemModel
     */
    plan?: AddonsPlan;
    /**
     * 
     * @type {string}
     * @memberof V0AddOnAppResponseItemModel
     */
    planStartedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AddOnAppResponseItemModel
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AddOnAppResponseItemModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0AddOnAppResponseItemModel interface.
 */
export function instanceOfV0AddOnAppResponseItemModel(value: object): value is V0AddOnAppResponseItemModel {
    return true;
}

export function V0AddOnAppResponseItemModelFromJSON(json: any): V0AddOnAppResponseItemModel {
    return V0AddOnAppResponseItemModelFromJSONTyped(json, false);
}

export function V0AddOnAppResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0AddOnAppResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'icon': json['icon'] == null ? undefined : json['icon'],
        'plan': json['plan'] == null ? undefined : AddonsPlanFromJSON(json['plan']),
        'planStartedAt': json['plan_started_at'] == null ? undefined : json['plan_started_at'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0AddOnAppResponseItemModelToJSON(json: any): V0AddOnAppResponseItemModel {
    return V0AddOnAppResponseItemModelToJSONTyped(json, false);
}

export function V0AddOnAppResponseItemModelToJSONTyped(value?: V0AddOnAppResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'icon': value['icon'],
        'plan': AddonsPlanToJSON(value['plan']),
        'plan_started_at': value['planStartedAt'],
        'slug': value['slug'],
        'title': value['title'],
    };
}

