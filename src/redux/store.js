import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
