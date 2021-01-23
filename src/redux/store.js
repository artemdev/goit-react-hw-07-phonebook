import { createStore, combineReducers } from 'redux';
import initialContacts from '../utils/contacts';
import ActionTypes from '../utils/actionTypes';

const contactsReducer = (state = initialContacts(), { type, payload }) => {
  switch (type) {
    case ActionTypes.deleteContact:
      return payload.contacts.filter(contact => contact.id !== payload.id);
    case ActionTypes.addContact:
      return [...state, payload];
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionTypes.setFilter:
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer);

export default store;
