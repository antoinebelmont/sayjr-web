import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';

import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from 'stores';


const rootElement = document.getElementById('root');


const renderApp = Component => {
    ReactDOM.render(
      <Provider store={store}> 
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>,
      rootElement
    );
  };
  renderApp(Main);
  
  if (module.hot) {
    module.hot.accept('./pages/Main', () => {
      const NextApp = require('./pages/Main').default
      renderApp(NextApp);
    });
  }
  
  registerServiceWorker();

