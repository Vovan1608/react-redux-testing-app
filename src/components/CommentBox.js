import { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const CommentBox = ({ saveComment }) => {
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
        <form data-testid='form' onSubmit={onSubmit}>
            <h4>Add a Comment</h4>
            <textarea data-testid='textarea' value={comment} onChange={onChange} />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export default connect(null, actions)(CommentBox);
