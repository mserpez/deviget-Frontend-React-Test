import { AnyAction, Dispatch } from 'redux';
// Action types
import { RedditActionTypes } from './actionsTypes';
// API fetch
import { getPosts } from '../../dal';
// API types
import { IPost } from '../../dal/types';
// App Service actions

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

// TODO: Move service actions to separate reducer.
export interface IFetchingAction {
    type: RedditActionTypes.READ_POST,
    payload: string
}

export interface IFetchErrorAction {
    type: RedditActionTypes.READ_POST,
    payload: string
}

export function fetchPostsAction(): IFetchPostsAction {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: RedditActionTypes.SERVICE_ERROR,
            payload: null,
        })
        dispatch({
            type: RedditActionTypes.SERVICE_FETCHING,
            payload: true,
        })
        return getPosts()
            .then(data => {
                dispatch({
                    type: RedditActionTypes.FETCH_DATA,
                    payload: data,
                })
            }).catch(err => {
                // TODO: Specify error to avoid generic error response.
                dispatch({
                    type: RedditActionTypes.SERVICE_ERROR,
                    payload: 'Failed to fetch',
                })
            }).finally(() => {
                dispatch({
                    type: RedditActionTypes.SERVICE_FETCHING,
                    payload: false,
                })
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