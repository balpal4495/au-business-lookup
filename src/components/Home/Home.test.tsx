import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe(':Home tests', () => {
  describe(':render', () => {
    it('should display content to help user search for businesses', () => {
      const { getByText } = render(<Home />);

      expect(getByText('Please enter the name of the business you are searching for and click search to view results')).toBeDefined();
      expect(getByText('Search')).toBeDefined();
    });
  });
});
