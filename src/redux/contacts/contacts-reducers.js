import { addContact, deleteContact } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
import initialContacts from '../../utils/contacts';

const contactsReducer = createReducer(initialContacts(), {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default contactsReducer;
