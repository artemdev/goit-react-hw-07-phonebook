import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from '../contacts/contacts-actions';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getInitialContacts = text => dispatch => {
  dispatch(fetchStart());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};
