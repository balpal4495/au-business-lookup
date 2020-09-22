import { Router } from 'express';
import { BASE_URL, GUID } from '../constants';
import axios from 'axios';
import { parseResponse } from '..//utils/parseResponse';

const router = Router();
router.get('/:abn', async (req, res) => {
  const { abn } = req.params
  const apiFunction = 'AbnDetails.aspx';

  const url = `${BASE_URL}/${apiFunction}?callback=cb&abn=${abn}&guid=${GUID}`;

  const response = await axios(url);
  const { data } = response;

  const dataToSend = parseResponse(data);

  if (response.status === 200) {
    return res.status(200).send(dataToSend);

  }

  res.status(404).send({ Message: 'Not Found'});
});

export default router;
