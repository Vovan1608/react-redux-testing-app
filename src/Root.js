import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import reducers from '../src/reducers';

export default (props) => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    );
};
