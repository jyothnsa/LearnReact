import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";
import getStores from "./getStores";
import { Provider } from 'react-redux';

ReactDOM.render(
    <div>
        <Provider store = {getStores()}>
        <App />
        </Provider>
    </div>,
    document.getElementById('app')
);
console.info("first console msg with web packs");