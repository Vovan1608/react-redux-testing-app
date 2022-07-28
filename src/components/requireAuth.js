import { useEffect } from 'react';
import { createBrowserHistory, createMemoryHistory } from 'history';

const history = createMemoryHistory(['/']);

export default (ChildComponent) => {
    return (props) => {
        const shouldNavigateAway = () => {
            if (!props.auth) {
                history.push('/');
            }
        };

        useEffect(() => {
            shouldNavigateAway();
        }, [props.auth]);

        return <ChildComponent {...props} />;
    };
};
