import { render, screen, fireEvent } from '@testing-library/react';

import CommentBox from '../CommentBox';

let textarea, button, form;

beforeEach(() => {
    const { getByTestId, getByRole } = screen;

    render(<CommentBox />);

    form = getByTestId('form');
    button = getByRole('button');
    textarea = getByTestId('textarea');
});

it('should have textarea and the button', () => {
    expect(textarea).toBeTruthy();
    expect(button).toBeTruthy();
});

it('user can type in the textarea ', () => {
    fireEvent.change(textarea, { target: { value: 'Hello, World!' } });

    expect(textarea.value).toBe('Hello, World!');
});

it('if form submitted, textarea gets empty', () => {
    fireEvent.change(textarea, { target: { value: 'Hello, World!' } });

    fireEvent.submit(form);

    expect(textarea.value).toBe('');
});
