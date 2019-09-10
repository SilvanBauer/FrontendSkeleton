import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { $App } from "./components/App";
import { combinedReducers } from "./services/default/combineReducers";

const store = createStore(combinedReducers, composeWithDevTools());

ReactDOM.render(<Provider store={store}><$App /></Provider>, document.getElementById('root'));
