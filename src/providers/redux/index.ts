// Redux
import { createStore, applyMiddleware, compose } from 'redux';
// Redux thunk to make async promises
import thunk from 'redux-thunk';
// Root reducers to combine all reducers.
import { rootReducer } from './rootReducer';
// Redux Persist to persist store data.
import { persistStore, persistReducer } from 'redux-persist'
// Storage: defaults to localStorage for web
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

export const persistor = persistStore(store)
