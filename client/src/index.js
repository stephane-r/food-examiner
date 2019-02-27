import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import store from './store';
import "./bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import "./utilities.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
