import axios from 'axios';
import { NameSearchResponse } from '../shared/types';


const BASE_URL = 'https://abr.business.gov.au/json';
const GUID = 'b6242120-5bce-4b10-9839-d3045a7682da';
export const searchByName = async (searchText: string, maxResults: number = 10): Promise<NameSearchResponse> => {

  const apiFunction = 'search';

  const url = `http://localhost:8000/api/${apiFunction}`;

  const response = await axios(url);
  console.log('response', response);

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Failed to fetch businesses');

}
// export const searchByName = async (searchText: string, maxResults: number = 10): Promise<NameSearchResponse> => {

//   const apiFunction = 'MatchingNames.aspx';

//   const url = `${BASE_URL}/${apiFunction}?callback=nameCallback&name=${searchText}&maxResults=${maxResults}&guid=${GUID}`;

//   const response = await axios(url);
//   console.log('response', response);

//   if (response.status === 200) {
//     return response.data;
//   }
//   throw new Error('Failed to fetch businesses');

// }