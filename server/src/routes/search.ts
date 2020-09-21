import { Router } from 'express';
import { BASE_URL, GUID } from '../constants';
import axios from 'axios';
import { parseResponse } from '..//utils/parseResponse';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ Message: '', Names: [] });
});
router.post('/', async (req, res) => {
  const { searchText, maxResults = 10 } = req.body;
  const apiFunction = 'MatchingNames.aspx';

  const url = `${BASE_URL}/${apiFunction}?callback=cb&name=${searchText}&maxResults=${maxResults}&guid=${GUID}`;

  const response = await axios(url);
  const { data } = response;

  const dataToSend = parseResponse(data);

  if (response.status === 200) {
    return res.status(200).send(dataToSend);

  }

  res.status(400).send({ Message: 'Bad request'});
});

export default router;
