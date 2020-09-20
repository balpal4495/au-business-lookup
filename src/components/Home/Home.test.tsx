import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Home } from './Home';

describe(':Home tests', () => {
  describe(':render', () => {
    it('should display content to help user search for businesses', () => {
      const { getByText } = render(<Home />);

      expect(
        getByText(
          'Please enter the name of the business you are searching for and click search to view results'
        )
      ).toBeDefined();
      expect(getByText('Search')).toBeDefined();
    });
  });

  describe(':Validation', () => {
    describe(':bad data', () => {
      it('Should display a message when searching with no text', () => {
        const { getByText } = render(<Home />);

        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        const errorText = getByText(
          /Please enter a business name before clicking search/
        );

        expect(errorText).toBeInTheDocument();
      });
    });
  });
});
