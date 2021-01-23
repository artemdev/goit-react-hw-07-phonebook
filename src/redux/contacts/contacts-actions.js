import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contactList/AddContact',
  (name, number, id) => ({
    payload: {
      name: name,
      number: number,
      id: id,
    },
  }),
);
export const deleteContact = createAction('contactList/DeleteContact');
