import { connect } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import * as actions from '../actions';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

const RenderButton = ({ auth, changeAuth }) => {
    if (auth) {
        return (
            <button onClick={() => changeAuth(false)}>
                Sign Out
            </button>
        );
    } else {
        return (
            <button onClick={() => changeAuth(true)}>
                Sign In
            </button>
        );
    }
};

const RenderHeader = ({ auth, changeAuth }) => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/post">Post</Link>
            </li>
            <li>
                <RenderButton auth={auth} changeAuth={changeAuth} />
            </li>
        </ul>
    );
};

const App = ({ auth, changeAuth }) => {
    return (
        <div>
            <RenderHeader auth={auth} changeAuth={changeAuth} />
            <Routes>
                <Route path='/post' element={<CommentBox />} />
                <Route path='/' element={<CommentList />} exact />
            </Routes>
        </div>
    );
};

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps, actions)(App);
