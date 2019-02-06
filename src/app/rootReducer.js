import blogReducer from './reducers/blogReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blogReducer,
});


export default rootReducer