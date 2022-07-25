import { useState } from 'react';

export default () => {
    const [comment, setComment] = useState('');

    const onChange = (e) => {
        setComment(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setComment('');
    };

    return (
        <form onSubmit={onSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={comment} onChange={onChange} />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};
