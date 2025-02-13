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
import type { V0PipelineShowEnvironmentsResponseModel } from './V0PipelineShowEnvironmentsResponseModel';
import {
    V0PipelineShowEnvironmentsResponseModelFromJSON,
    V0PipelineShowEnvironmentsResponseModelFromJSONTyped,
    V0PipelineShowEnvironmentsResponseModelToJSON,
    V0PipelineShowEnvironmentsResponseModelToJSONTyped,
} from './V0PipelineShowEnvironmentsResponseModel';

/**
 * 
 * @export
 * @interface V0PipelineShowTriggerParamsResponseModel
 */
export interface V0PipelineShowTriggerParamsResponseModel {
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    branch?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    branchDest?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    branchDestRepoOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    branchRepoOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    commitHash?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    commitMessage?: string;
    /**
     * 
     * @type {Array<V0PipelineShowEnvironmentsResponseModel>}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    environments?: Array<V0PipelineShowEnvironmentsResponseModel>;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestAuthor?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestHeadBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestId?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestMergeBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestRepositoryUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    pullRequestUnverifiedMergeBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowTriggerParamsResponseModel
     */
    tag?: string;
}

/**
 * Check if a given object implements the V0PipelineShowTriggerParamsResponseModel interface.
 */
export function instanceOfV0PipelineShowTriggerParamsResponseModel(value: object): value is V0PipelineShowTriggerParamsResponseModel {
    return true;
}

export function V0PipelineShowTriggerParamsResponseModelFromJSON(json: any): V0PipelineShowTriggerParamsResponseModel {
    return V0PipelineShowTriggerParamsResponseModelFromJSONTyped(json, false);
}

export function V0PipelineShowTriggerParamsResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0PipelineShowTriggerParamsResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'branch': json['branch'] == null ? undefined : json['branch'],
        'branchDest': json['branch_dest'] == null ? undefined : json['branch_dest'],
        'branchDestRepoOwner': json['branch_dest_repo_owner'] == null ? undefined : json['branch_dest_repo_owner'],
        'branchRepoOwner': json['branch_repo_owner'] == null ? undefined : json['branch_repo_owner'],
        'commitHash': json['commit_hash'] == null ? undefined : json['commit_hash'],
        'commitMessage': json['commit_message'] == null ? undefined : json['commit_message'],
        'environments': json['environments'] == null ? undefined : ((json['environments'] as Array<any>).map(V0PipelineShowEnvironmentsResponseModelFromJSON)),
        'pullRequestAuthor': json['pull_request_author'] == null ? undefined : json['pull_request_author'],
        'pullRequestHeadBranch': json['pull_request_head_branch'] == null ? undefined : json['pull_request_head_branch'],
        'pullRequestId': json['pull_request_id'] == null ? undefined : json['pull_request_id'],
        'pullRequestMergeBranch': json['pull_request_merge_branch'] == null ? undefined : json['pull_request_merge_branch'],
        'pullRequestRepositoryUrl': json['pull_request_repository_url'] == null ? undefined : json['pull_request_repository_url'],
        'pullRequestUnverifiedMergeBranch': json['pull_request_unverified_merge_branch'] == null ? undefined : json['pull_request_unverified_merge_branch'],
        'tag': json['tag'] == null ? undefined : json['tag'],
    };
}

export function V0PipelineShowTriggerParamsResponseModelToJSON(json: any): V0PipelineShowTriggerParamsResponseModel {
    return V0PipelineShowTriggerParamsResponseModelToJSONTyped(json, false);
}

export function V0PipelineShowTriggerParamsResponseModelToJSONTyped(value?: V0PipelineShowTriggerParamsResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'branch': value['branch'],
        'branch_dest': value['branchDest'],
        'branch_dest_repo_owner': value['branchDestRepoOwner'],
        'branch_repo_owner': value['branchRepoOwner'],
        'commit_hash': value['commitHash'],
        'commit_message': value['commitMessage'],
        'environments': value['environments'] == null ? undefined : ((value['environments'] as Array<any>).map(V0PipelineShowEnvironmentsResponseModelToJSON)),
        'pull_request_author': value['pullRequestAuthor'],
        'pull_request_head_branch': value['pullRequestHeadBranch'],
        'pull_request_id': value['pullRequestId'],
        'pull_request_merge_branch': value['pullRequestMergeBranch'],
        'pull_request_repository_url': value['pullRequestRepositoryUrl'],
        'pull_request_unverified_merge_branch': value['pullRequestUnverifiedMergeBranch'],
        'tag': value['tag'],
    };
}

