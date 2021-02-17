// Action types
import { SERVICES } from '../../constants';
import { RedditActionTypes } from './actionsTypes';

// API types
import { IRedditTop50Root } from '../../constants/services/reddit/types';

export interface IRedditFetchAction {
    type: RedditActionTypes
    payload: IRedditTop50Root
}

export function fetch(): IRedditFetchAction {
    return {
        type: RedditActionTypes.FETCH_DATA,
        payload: SERVICES.REDDIT_SERVICE.MOCK_DATA
    }
}

// Add here other types of actions.
export type IRedditFetchActions = IRedditFetchAction