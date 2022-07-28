import { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import requireAuth from './requireAuth';

const CommentBox = ({ saveComment, fetchComments, auth }) => {
    const [comment, setComment] = useState('');

    const onChange = (e) => {
        setComment(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setComment('');

        saveComment(comment);
    };

    return (
        <>
            <form data-testid='form' onSubmit={onSubmit}>
                <h4>Add a Comment</h4>
                <textarea data-testid='textarea' value={comment} onChange={onChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={fetchComments}>Fetch Comments</button>
        </>
    );
};

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default requireAuth(connect(mapStateToProps, actions)(CommentBox));
