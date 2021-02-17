// Vendor
import { set as _set } from 'dot-prop-immutable';

// Types
import { IRedditTop50Root } from '../../constants/services/reddit/types';
import { RedditActionTypes } from './actionsTypes';
import { IRedditFetchActions } from './actions';

export interface IRedditState {
    data: {
        top50: IRedditTop50Root | undefined
    }
}

const initialState: IRedditState = {
    data: {
        top50: undefined
    }
};

export function reducer(state: IRedditState = initialState, action: IRedditFetchActions) {
    const { type, payload } = action;

    if (type === RedditActionTypes.FETCH_DATA) {
        state = _set(state, 'data.top50', payload);
    }

    return state;
}
