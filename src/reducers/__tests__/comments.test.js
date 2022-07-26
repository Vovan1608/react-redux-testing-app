import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('should handle action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'Test comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['Test comment']);
});

it('should handle action of unknown type', () => {
    const newState = commentsReducer([], { type: 'Abra-cadabra' });

    expect(newState).toEqual([]);
});
