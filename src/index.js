import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './config/store'
import sagaMiddleware from './app/middleware/sagaMiddleware';
import { watchGetBlogs, watchGetBlog, watchDeleteBlog, watchUpdateBlog, watchAddBlog } from './sagas/saga';

sagaMiddleware.run(watchGetBlogs);
sagaMiddleware.run(watchGetBlog);
sagaMiddleware.run(watchDeleteBlog);
sagaMiddleware.run(watchUpdateBlog);
sagaMiddleware.run(watchAddBlog);
ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
