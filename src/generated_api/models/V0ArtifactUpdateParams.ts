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
 * @interface V0ArtifactUpdateParams
 */
export interface V0ArtifactUpdateParams {
    /**
     * 
     * @type {boolean}
     * @memberof V0ArtifactUpdateParams
     */
    isPublicPageEnabled: boolean;
}

/**
 * Check if a given object implements the V0ArtifactUpdateParams interface.
 */
export function instanceOfV0ArtifactUpdateParams(value: object): value is V0ArtifactUpdateParams {
    if (!('isPublicPageEnabled' in value) || value['isPublicPageEnabled'] === undefined) return false;
    return true;
}

export function V0ArtifactUpdateParamsFromJSON(json: any): V0ArtifactUpdateParams {
    return V0ArtifactUpdateParamsFromJSONTyped(json, false);
}

export function V0ArtifactUpdateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArtifactUpdateParams {
    if (json == null) {
        return json;
    }
    return {
        
        'isPublicPageEnabled': json['is_public_page_enabled'],
    };
}

export function V0ArtifactUpdateParamsToJSON(json: any): V0ArtifactUpdateParams {
    return V0ArtifactUpdateParamsToJSONTyped(json, false);
}

export function V0ArtifactUpdateParamsToJSONTyped(value?: V0ArtifactUpdateParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'is_public_page_enabled': value['isPublicPageEnabled'],
    };
}

