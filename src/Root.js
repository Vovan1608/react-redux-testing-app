import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducers from '../src/reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
