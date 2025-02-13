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
import type { WebsiteBitriseYMLLocation } from './WebsiteBitriseYMLLocation';
import {
    WebsiteBitriseYMLLocationFromJSON,
    WebsiteBitriseYMLLocationFromJSONTyped,
    WebsiteBitriseYMLLocationToJSON,
    WebsiteBitriseYMLLocationToJSONTyped,
} from './WebsiteBitriseYMLLocation';

/**
 * 
 * @export
 * @interface V0BitriseYMLConfigGetResponse
 */
export interface V0BitriseYMLConfigGetResponse {
    /**
     * Location of bitrise.yml file. Enums(bitrise.io, repository)
     * @type {WebsiteBitriseYMLLocation}
     * @memberof V0BitriseYMLConfigGetResponse
     */
    location?: WebsiteBitriseYMLLocation;
}



/**
 * Check if a given object implements the V0BitriseYMLConfigGetResponse interface.
 */
export function instanceOfV0BitriseYMLConfigGetResponse(value: object): value is V0BitriseYMLConfigGetResponse {
    return true;
}

export function V0BitriseYMLConfigGetResponseFromJSON(json: any): V0BitriseYMLConfigGetResponse {
    return V0BitriseYMLConfigGetResponseFromJSONTyped(json, false);
}

export function V0BitriseYMLConfigGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BitriseYMLConfigGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'location': json['location'] == null ? undefined : WebsiteBitriseYMLLocationFromJSON(json['location']),
    };
}

export function V0BitriseYMLConfigGetResponseToJSON(json: any): V0BitriseYMLConfigGetResponse {
    return V0BitriseYMLConfigGetResponseToJSONTyped(json, false);
}

export function V0BitriseYMLConfigGetResponseToJSONTyped(value?: V0BitriseYMLConfigGetResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'location': WebsiteBitriseYMLLocationToJSON(value['location']),
    };
}

