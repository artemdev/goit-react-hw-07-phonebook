import { createReducer } from '@reduxjs/toolkit';
import setFilter from './filter-actions';

export default createReducer('', {
  [setFilter.type]: (state, { payload }) => payload,
});
