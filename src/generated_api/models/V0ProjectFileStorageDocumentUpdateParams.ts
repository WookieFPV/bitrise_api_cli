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
 * @interface V0ProjectFileStorageDocumentUpdateParams
 */
export interface V0ProjectFileStorageDocumentUpdateParams {
    /**
     * 
     * @type {object}
     * @memberof V0ProjectFileStorageDocumentUpdateParams
     */
    exposedMetaDatastore?: object;
    /**
     * 
     * @type {boolean}
     * @memberof V0ProjectFileStorageDocumentUpdateParams
     */
    isExpose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0ProjectFileStorageDocumentUpdateParams
     */
    isProtected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0ProjectFileStorageDocumentUpdateParams
     */
    processed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0ProjectFileStorageDocumentUpdateParams
     */
    userEnvKey?: string;
}

/**
 * Check if a given object implements the V0ProjectFileStorageDocumentUpdateParams interface.
 */
export function instanceOfV0ProjectFileStorageDocumentUpdateParams(value: object): value is V0ProjectFileStorageDocumentUpdateParams {
    return true;
}

export function V0ProjectFileStorageDocumentUpdateParamsFromJSON(json: any): V0ProjectFileStorageDocumentUpdateParams {
    return V0ProjectFileStorageDocumentUpdateParamsFromJSONTyped(json, false);
}

export function V0ProjectFileStorageDocumentUpdateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ProjectFileStorageDocumentUpdateParams {
    if (json == null) {
        return json;
    }
    return {
        
        'exposedMetaDatastore': json['exposed_meta_datastore'] == null ? undefined : json['exposed_meta_datastore'],
        'isExpose': json['is_expose'] == null ? undefined : json['is_expose'],
        'isProtected': json['is_protected'] == null ? undefined : json['is_protected'],
        'processed': json['processed'] == null ? undefined : json['processed'],
        'userEnvKey': json['user_env_key'] == null ? undefined : json['user_env_key'],
    };
}

export function V0ProjectFileStorageDocumentUpdateParamsToJSON(json: any): V0ProjectFileStorageDocumentUpdateParams {
    return V0ProjectFileStorageDocumentUpdateParamsToJSONTyped(json, false);
}

export function V0ProjectFileStorageDocumentUpdateParamsToJSONTyped(value?: V0ProjectFileStorageDocumentUpdateParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'exposed_meta_datastore': value['exposedMetaDatastore'],
        'is_expose': value['isExpose'],
        'is_protected': value['isProtected'],
        'processed': value['processed'],
        'user_env_key': value['userEnvKey'],
    };
}

