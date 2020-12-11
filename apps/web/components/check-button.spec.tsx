import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckButton } from './check-button';

describe('Check Icon', () => {

    it('calls "onClick" prop on button click', () => {
      // Render new instance in every test to prevent leaking state
      const onClick = jest.fn();
      const { container } = render(<CheckButton taskId="task_id" />);
    
      fireEvent.click(container.querySelector('#check-icon'));
      expect(onClick).toHaveBeenCalled();
    });
});