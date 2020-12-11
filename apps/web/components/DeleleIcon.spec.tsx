import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeleteIcon } from './DeleteIcon';

describe('Delete Icon', () => {
  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { container } = render(<DeleteIcon handleClick={onClick} />);

    fireEvent.click(container.querySelector('#delete-icon'));
    expect(onClick).toHaveBeenCalled();
  });
});
