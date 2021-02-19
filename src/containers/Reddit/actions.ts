import { AnyAction, Dispatch } from 'redux';
// Action types
import { RedditActionTypes } from './actionsTypes';
// API fetch
import { getPosts } from '../../dal';
// API types
import { IPost } from '../../dal/types';

// Action Definition
export type IFetchPostsAction = (dispatch: Dispatch<AnyAction>) => Promise<void | {
    type: RedditActionTypes.FETCH_DATA,
    payload: IPost
}>

export interface IDismissPostAction {
    type: RedditActionTypes.DISMISS_POST,
    payload: string
}

export interface IDismissAllPostsAction {
    type: RedditActionTypes.DISMISS_ALL_POSTS,
}

export interface IReadPostAction {
    type: RedditActionTypes.READ_POST,
    payload: string
}

export function fetchPostsAction(): IFetchPostsAction {
    return async (dispatch: Dispatch) => {
        return getPosts().then(data => {
            dispatch({
                type: RedditActionTypes.FETCH_DATA,
                payload: data,
            })
        }).catch(err => {
            console.log(">>>>>", err);
        });
    };

}

export function dismissPostAction(id: string): IDismissPostAction {
    return {
        type: RedditActionTypes.DISMISS_POST,
        payload: id
    }
}

export function dismissAllPostsAction(): IDismissAllPostsAction {
    return {
        type: RedditActionTypes.DISMISS_ALL_POSTS,
    }
}

export function readPostAction(id: string): IReadPostAction {
    return {
        type: RedditActionTypes.READ_POST,
        payload: id
    }
}

// Add here other types of actions.
export type RedditActions = IFetchPostsAction | IDismissPostAction | IReadPostAction | IDismissAllPostsAction