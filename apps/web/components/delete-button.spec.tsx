import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeleteButton } from './delete-button';

describe('Delete Icon', () => {
  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { container } = render(<DeleteButton taskId="task_id" />);

    fireEvent.click(container.querySelector('#delete-icon'));
    expect(onClick).toHaveBeenCalled();
  });
});
