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
 * @interface V0ActivityEventResponseItemModel
 */
export interface V0ActivityEventResponseItemModel {
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    eventIcon?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    eventStype?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    repositoryAvatarIconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    repositoryTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    targetPathString?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ActivityEventResponseItemModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0ActivityEventResponseItemModel interface.
 */
export function instanceOfV0ActivityEventResponseItemModel(value: object): value is V0ActivityEventResponseItemModel {
    return true;
}

export function V0ActivityEventResponseItemModelFromJSON(json: any): V0ActivityEventResponseItemModel {
    return V0ActivityEventResponseItemModelFromJSONTyped(json, false);
}

export function V0ActivityEventResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ActivityEventResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'description': json['description'] == null ? undefined : json['description'],
        'eventIcon': json['event_icon'] == null ? undefined : json['event_icon'],
        'eventStype': json['event_stype'] == null ? undefined : json['event_stype'],
        'repositoryAvatarIconUrl': json['repository_avatar_icon_url'] == null ? undefined : json['repository_avatar_icon_url'],
        'repositoryTitle': json['repository_title'] == null ? undefined : json['repository_title'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'targetPathString': json['target_path_string'] == null ? undefined : json['target_path_string'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0ActivityEventResponseItemModelToJSON(json: any): V0ActivityEventResponseItemModel {
    return V0ActivityEventResponseItemModelToJSONTyped(json, false);
}

export function V0ActivityEventResponseItemModelToJSONTyped(value?: V0ActivityEventResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created_at': value['createdAt'],
        'description': value['description'],
        'event_icon': value['eventIcon'],
        'event_stype': value['eventStype'],
        'repository_avatar_icon_url': value['repositoryAvatarIconUrl'],
        'repository_title': value['repositoryTitle'],
        'slug': value['slug'],
        'target_path_string': value['targetPathString'],
        'title': value['title'],
    };
}

