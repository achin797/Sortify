import React from 'react';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(logger, promise())
const store = createStore(rootReducer, middleware)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
