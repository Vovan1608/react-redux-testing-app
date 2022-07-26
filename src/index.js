import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

import reducers from '../src/reducers';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, {});

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
