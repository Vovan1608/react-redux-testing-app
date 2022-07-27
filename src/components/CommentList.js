import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
    const renderComments = () => {
        return comments.map((comment, idx) => {
            return (
                <li key={idx}>{comment}</li>
            );
        });
    };

    return (
        <div>
            <h4>Comment List</h4>
            <ul>
                {renderComments()}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
