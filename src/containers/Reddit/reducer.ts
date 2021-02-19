// Vendor
import { set as _set } from 'dot-prop-immutable';
import { get as _get } from 'lodash';

// Types
import { IPost } from '../../dal/types';
import { RedditActionTypes } from './actionsTypes';
import { RedditActions } from './actions';

export interface IRedditState {
    data: {
        top50: IPost[]
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
    const type = _get(action, 'type');
    const payload = _get(action, 'payload');

    if (type === RedditActionTypes.FETCH_DATA) {
        // Asing to 
        state = _set(state, 'data.top50', payload);
    }

    if (type === RedditActionTypes.DISMISS_POST) {
        // Save in a new list the dismissed ids.
        const list = _get(state, 'data.dismissedList', []);
        if (!list.includes(payload)) list.push(payload);

        state = _set(state, 'data.dismissedList', list);
    }

    if (type === RedditActionTypes.DISMISS_ALL_POSTS) {
        // Fill dismissed list with all of ids.
        const allPosts = state.data.top50;
        const allPostIds = allPosts.map(item => item.id)

        state = _set(state, 'data.dismissedList', allPostIds);
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
