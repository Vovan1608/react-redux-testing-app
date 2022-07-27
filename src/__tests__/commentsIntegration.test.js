import moxios from 'moxios';
import { render, screen, within, fireEvent } from '@testing-library/react';

import Root from '../Root';
import App from '../components/App';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('should fetch a list of comments', async () => {
    render(
        <Root>
            <App />
        </Root>
    );

    const fetchButton = screen.getByRole('button', { name: 'Fetch Comments' });

    await act(() => {
        fireEvent.click(fetchButton);
    });

    const commentList = screen.getByRole('list');

    const { queryAllByRole } = within(commentList);

    const items = queryAllByRole('listitem');

    setTimeout(() => {
        expect(items.length).toBe(2);
    }, 1000);
});
