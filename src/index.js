import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store, { persistor } from './config/store'
import sagaMiddleware from './app/middleware/sagaMiddleware';
import watchActions from './sagas/saga';
import { PersistGate } from 'redux-persist/integration/react'
sagaMiddleware.run(watchActions);

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
            <App />
        </Router>
    </PersistGate>
</Provider>, document.getElementById('root'));
