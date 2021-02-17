// Vendor
import { combineReducers } from "redux";

// Reducers
import { CONTAINER_NAME as REDDIT_CONTAINER_NAME, reducer as redditReducer } from '../../containers/Reddit';

export const rootReducer = combineReducers({
    [REDDIT_CONTAINER_NAME]: redditReducer,
})