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
 * @interface V0PipelineAbortParams
 */
export interface V0PipelineAbortParams {
    /**
     * 
     * @type {string}
     * @memberof V0PipelineAbortParams
     */
    abortReason: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0PipelineAbortParams
     */
    abortWithSuccess: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0PipelineAbortParams
     */
    skipNotifications: boolean;
}

/**
 * Check if a given object implements the V0PipelineAbortParams interface.
 */
export function instanceOfV0PipelineAbortParams(value: object): value is V0PipelineAbortParams {
    if (!('abortReason' in value) || value['abortReason'] === undefined) return false;
    if (!('abortWithSuccess' in value) || value['abortWithSuccess'] === undefined) return false;
    if (!('skipNotifications' in value) || value['skipNotifications'] === undefined) return false;
    return true;
}

export function V0PipelineAbortParamsFromJSON(json: any): V0PipelineAbortParams {
    return V0PipelineAbortParamsFromJSONTyped(json, false);
}

export function V0PipelineAbortParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0PipelineAbortParams {
    if (json == null) {
        return json;
    }
    return {
        
        'abortReason': json['abort_reason'],
        'abortWithSuccess': json['abort_with_success'],
        'skipNotifications': json['skip_notifications'],
    };
}

export function V0PipelineAbortParamsToJSON(json: any): V0PipelineAbortParams {
    return V0PipelineAbortParamsToJSONTyped(json, false);
}

export function V0PipelineAbortParamsToJSONTyped(value?: V0PipelineAbortParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'abort_reason': value['abortReason'],
        'abort_with_success': value['abortWithSuccess'],
        'skip_notifications': value['skipNotifications'],
    };
}

