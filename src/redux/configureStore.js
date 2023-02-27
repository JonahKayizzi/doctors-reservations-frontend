import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './users';

const reducer = combineReducers({
  users: usersSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
