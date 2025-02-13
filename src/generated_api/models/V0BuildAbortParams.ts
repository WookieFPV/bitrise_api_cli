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
 * @interface V0BuildAbortParams
 */
export interface V0BuildAbortParams {
    /**
     * 
     * @type {string}
     * @memberof V0BuildAbortParams
     */
    abortReason: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildAbortParams
     */
    abortWithSuccess: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildAbortParams
     */
    skipNotifications: boolean;
}

/**
 * Check if a given object implements the V0BuildAbortParams interface.
 */
export function instanceOfV0BuildAbortParams(value: object): value is V0BuildAbortParams {
    if (!('abortReason' in value) || value['abortReason'] === undefined) return false;
    if (!('abortWithSuccess' in value) || value['abortWithSuccess'] === undefined) return false;
    if (!('skipNotifications' in value) || value['skipNotifications'] === undefined) return false;
    return true;
}

export function V0BuildAbortParamsFromJSON(json: any): V0BuildAbortParams {
    return V0BuildAbortParamsFromJSONTyped(json, false);
}

export function V0BuildAbortParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildAbortParams {
    if (json == null) {
        return json;
    }
    return {
        
        'abortReason': json['abort_reason'],
        'abortWithSuccess': json['abort_with_success'],
        'skipNotifications': json['skip_notifications'],
    };
}

export function V0BuildAbortParamsToJSON(json: any): V0BuildAbortParams {
    return V0BuildAbortParamsToJSONTyped(json, false);
}

export function V0BuildAbortParamsToJSONTyped(value?: V0BuildAbortParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'abort_reason': value['abortReason'],
        'abort_with_success': value['abortWithSuccess'],
        'skip_notifications': value['skipNotifications'],
    };
}

