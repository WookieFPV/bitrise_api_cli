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
import type { V0WebhookDeliveryItemResponseModel } from './V0WebhookDeliveryItemResponseModel';
import {
    V0WebhookDeliveryItemResponseModelFromJSON,
    V0WebhookDeliveryItemResponseModelFromJSONTyped,
    V0WebhookDeliveryItemResponseModelToJSON,
    V0WebhookDeliveryItemResponseModelToJSONTyped,
} from './V0WebhookDeliveryItemResponseModel';

/**
 * 
 * @export
 * @interface V0WebhookDeliveryItemShowResponseModel
 */
export interface V0WebhookDeliveryItemShowResponseModel {
    /**
     * 
     * @type {V0WebhookDeliveryItemResponseModel}
     * @memberof V0WebhookDeliveryItemShowResponseModel
     */
    data?: V0WebhookDeliveryItemResponseModel;
}

/**
 * Check if a given object implements the V0WebhookDeliveryItemShowResponseModel interface.
 */
export function instanceOfV0WebhookDeliveryItemShowResponseModel(value: object): value is V0WebhookDeliveryItemShowResponseModel {
    return true;
}

export function V0WebhookDeliveryItemShowResponseModelFromJSON(json: any): V0WebhookDeliveryItemShowResponseModel {
    return V0WebhookDeliveryItemShowResponseModelFromJSONTyped(json, false);
}

export function V0WebhookDeliveryItemShowResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0WebhookDeliveryItemShowResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0WebhookDeliveryItemResponseModelFromJSON(json['data']),
    };
}

export function V0WebhookDeliveryItemShowResponseModelToJSON(json: any): V0WebhookDeliveryItemShowResponseModel {
    return V0WebhookDeliveryItemShowResponseModelToJSONTyped(json, false);
}

export function V0WebhookDeliveryItemShowResponseModelToJSONTyped(value?: V0WebhookDeliveryItemShowResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0WebhookDeliveryItemResponseModelToJSON(value['data']),
    };
}

