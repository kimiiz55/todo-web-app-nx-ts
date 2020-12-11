import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckIcon } from './CheckIcon';

describe('Check Icon', () => {

    it('calls "onClick" prop on button click', () => {
      // Render new instance in every test to prevent leaking state
      const onClick = jest.fn();
      const { container } = render(<CheckIcon handleClick={onClick} />);
    
      fireEvent.click(container.querySelector('#check-icon'));
      expect(onClick).toHaveBeenCalled();
    });
});