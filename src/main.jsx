import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
