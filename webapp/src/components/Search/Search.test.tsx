import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from './Search';
import nock from 'nock';
const nameCallback = require('../../services/fixtures/nameCallback.json');

nock.disableNetConnect();
describe(':Search tests', () => {
  describe(':render', () => {
    it('should display content to help user search for businesses', () => {
      const { getByText } = render(<Search />);

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
        const { getByText } = render(<Search />);

        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        const errorText = getByText(
          /Please enter a business name before clicking search/
        );

        expect(errorText).toBeInTheDocument();
      });
    });

    describe(':good data', () => {
      it('should not display error message', () => {
        const { getByText, getByTestId, queryByText } = render(
          <Search />
        );

        nock('http://localhost:8000/api')
          .post('/search', {
            data: {
              searchText: 'burgers',
              maxResults: 10,
            },
          })
          .reply(
            200,
            { data: nameCallback },
            {
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'application/json',
            }
          );

        const searchBar = getByTestId('business-name-search-input');
        fireEvent.change(searchBar, { target: { value: 'burgers' } });
        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        const errorText = queryByText(
          /Please enter a business name before clicking search/
        );
        expect(errorText).toBe(null);
      });
    });
  });
});
