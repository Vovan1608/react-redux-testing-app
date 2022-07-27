import { render, screen, within } from '@testing-library/react';

import Root from '../../Root';
import CommentList from '../CommentList';

beforeEach(() => {
    const initialState = {
        comments: [
            'Test comment 1',
            'Test comment 2'
        ]
    };

    render(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('should create one LI per comment', () => {
    const commentList = screen.getByRole('list');

    const { getAllByRole } = within(commentList);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(2);
});


it('should show the text for each comment', () => {
    const commentList = screen.getByRole('list');

    const { getAllByRole } = within(commentList);
    const items = getAllByRole('listitem');

    expect(items[0].innerHTML).toBe('Test comment 1');
    expect(items[1].innerHTML).toBe('Test comment 2');
});