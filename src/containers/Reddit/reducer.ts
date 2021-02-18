// Vendor
import { set as _set } from 'dot-prop-immutable';
import { get as _get } from 'lodash';

// Types
import { IRedditTop50DataItem } from '../../constants/services/reddit/types';
import { RedditActionTypes } from './actionsTypes';
import { RedditActions } from './actions';

export interface IRedditState {
    data: {
        top50: IRedditTop50DataItem[]
        readList: string[]
        dismissedList: string[]
    },
    openedId?: string
}

const initialState: IRedditState = {
    data: {
        top50: [],
        readList: [],
        dismissedList: [],
    },
    openedId: undefined
};

export function reducer(state: IRedditState = initialState, action: RedditActions) {
    const { type, payload } = action;

    if (type === RedditActionTypes.FETCH_DATA) {
        // Asing to 
        state = _set(state, 'data.top50', _get(payload, 'data.children'));
    }

    if (type === RedditActionTypes.DISMISS_POST) {
        // Save in a new list the dismissed ids.
        const list = _get(state, 'data.dismissedList', []);
        if (!list.includes(payload)) list.push(payload);
        state = _set(state, 'data.dismissedList', list);
    }

    if (type === RedditActionTypes.READ_POST) {
        // Save in a new list the read ids.
        const list = _get(state, 'data.readList', []);
        if (!list.includes(payload)) list.push(payload);
        state = _set(state, 'data.readList', list);
        state = _set(state, 'openedId', payload);
    }

    return state;
}
