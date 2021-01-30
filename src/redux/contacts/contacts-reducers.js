import {
  addSuccess,
  addError,
  deleteSuccess,
  deleteError,
  fetchSuccess,
} from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], {
  [addSuccess]: (state, { payload }) => [...state, payload],
  [addError]: state => state,
  [deleteSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [deleteError]: state => state,
  [fetchSuccess]: (state, { payload }) => [...state, ...payload],
});

export default contactsReducer;
