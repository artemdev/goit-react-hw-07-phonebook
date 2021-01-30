import axios from 'axios';
import {
  addStart,
  addSuccess,
  addError,
  deleteStart,
  deleteSuccess,
  deleteError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const addContact = contact => dispatch => {
  dispatch(addStart());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(addStart());
  dispatch(deleteStart());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};
