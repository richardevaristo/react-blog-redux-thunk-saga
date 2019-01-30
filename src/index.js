import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import blogReducer from './store/reducers/blogReducer';
import thunk from 'redux-thunk';


const store = createStore(blogReducer, applyMiddleware(createLogger(), thunk));

store.subscribe( ()  => {
    console.log('Store Updated!', store.getState())
} )

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
