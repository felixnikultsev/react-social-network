import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store-redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

export function rerender() {
  ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App store={store} />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

rerender();

store.subscribe( () => {
  rerender();
} );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
