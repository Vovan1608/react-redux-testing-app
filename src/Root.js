import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import reducers from '../src/reducers';

export default ({ children, initialState = {} }) => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            {children}
        </Provider>
    );
};
