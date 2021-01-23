import ActionTypes from './actionTypes';

export const setFilter = value => ({
  type: ActionTypes.setFilter,
  payload: value,
});

export const deleteContact = (contacts, id) => ({
  type: ActionTypes.deleteContact,
  payload: {
    contacts: contacts,
    id: id,
  },
});

export const addContact = (name, number, id) => ({
  type: ActionTypes.addContact,
  payload: {
    name: name,
    number: number,
    id: id,
  },
});
