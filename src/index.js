import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducers from '../src/reducers';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, {}, applyMiddleware(reduxPromise));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
