import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import {addUser} from './actions';
import setupSocket from './sockets';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)
// store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();