import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducers from '../src/reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
