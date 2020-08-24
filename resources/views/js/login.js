import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/base.scss';

import Login from './pages/Login';
import { Provider } from 'react-redux';
import stores from 'stores';

const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={stores}> 
            <Component />   
        </Provider>,
        rootElement
    );
}

renderApp(Login);

registerServiceWorker();