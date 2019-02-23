import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import "./utilities.css";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
