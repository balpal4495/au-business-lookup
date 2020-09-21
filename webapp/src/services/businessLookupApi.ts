import axios from 'axios';
import { NameSearchResponse } from '../shared/types';
export const searchByName = async (searchText: string, maxResults: number = 10): Promise<NameSearchResponse> => {

  const apiFunction = 'search';

  const url = `http://localhost:8000/api/${apiFunction}`;

  const response = await axios.post(url, {
    data: {
      searchText,
      maxResults
    }
  });

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Failed to fetch businesses');

}
