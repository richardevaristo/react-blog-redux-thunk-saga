import { createStore } from 'redux'
import rootReducer from '../app/rootReducer'
import rootMiddleware from '../app/rootMiddleware';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    {},
    rootMiddleware
);

export default store
export const persistor = persistStore(store)