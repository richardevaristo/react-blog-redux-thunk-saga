import { createStore } from 'redux'
import rootReducer from '../app/rootReducer'
import rootMiddleware from '../app/rootMiddleware';

const store = createStore(
    rootReducer,
    {},
    rootMiddleware
);

store.subscribe(() => console.log('Store Updated!', store.getState()))

export default store