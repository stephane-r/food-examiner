import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import "./utilities.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
