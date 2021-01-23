import { createStore, combineReducers } from 'redux';

import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer);

export default store;
