import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from'./Redux/reduxStore'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export function _callSubscriber() {

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

    );
}

let state= store.getState();

_callSubscriber(state);
store.subscribe(_callSubscriber);

reportWebVitals();