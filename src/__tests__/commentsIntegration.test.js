import { render, screen, within, fireEvent } from '@testing-library/react';

import Root from '../Root';
import App from '../components/App';

it('shpuld fetch a list of comments', () => {
    render(
        <Root>
            <App />
        </Root>
    );

    const fetchButton = screen.getByRole('button', { name: 'Fetch Comments' });

    fireEvent.click(fetchButton);

    const commentList = screen.getByRole('list');

    const { queryAllByRole } = within(commentList);

    const items = queryAllByRole(commentList, 'listitem');

    // expect(items.length).toBe(500);
});
