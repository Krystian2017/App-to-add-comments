import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import DevTools from "./container/DevTools";
import reducer from "./container/reducer";
import { addComment } from "./container/actions";

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(addComment("First comment,"));
store.dispatch(addComment("Second comment,"));
