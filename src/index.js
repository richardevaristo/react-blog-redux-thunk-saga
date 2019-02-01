import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import blogReducer from './store/reducers/blogReducer';
import thunk from 'redux-thunk';
import { getBlogs } from './store/actions/blogActions';

const store = createStore(combineReducers(
    {
        blogReducer
    }
    ),{}, applyMiddleware(createLogger(), thunk));
store.dispatch(getBlogs())
store.subscribe( ()  => {
    console.log('Store Updated!', store.getState())
} )

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
