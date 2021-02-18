// Action types
import { SERVICES } from '../../constants';
import { RedditActionTypes } from './actionsTypes';

// API types
import { IRedditTop50Root } from '../../constants/services/reddit/types';


type ActionsPayload = {
    [RedditActionTypes.FETCH_DATA]: IRedditTop50Root
    [RedditActionTypes.DISMISS_POST]: string
    [RedditActionTypes.READ_POST]: string
}

export function fetchPostsAction(): RedditActions {
    return {
        type: RedditActionTypes.FETCH_DATA,
        payload: SERVICES.REDDIT_SERVICE.MOCK_DATA
    }
}

export function dismissPostAction(id: string): RedditActions {
    return {
        type: RedditActionTypes.DISMISS_POST,
        payload: id
    }
}

export function readPostAction(id: string): RedditActions {
    return {
        type: RedditActionTypes.READ_POST,
        payload: id
    }
}

// It's in charge to map Action Type and Action Payload, based on Action type. 
// It's to avoid crete a lot of action types.
type ActionMap<ActionPayload extends { [index: string]: any }> = {
    [Key in keyof ActionPayload]: ActionPayload[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: ActionPayload[Key];
    }
};

// Add here other types of actions.
export type RedditActions = ActionMap<ActionsPayload>[keyof ActionMap<ActionsPayload>];