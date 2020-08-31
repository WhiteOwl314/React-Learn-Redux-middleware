import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    //logger 가 가장 마지막에 와야 함
    composeWithDevTools(applyMiddleware(ReduxThunk,logger))
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
