import { combineReducers, configureStore } from '@reduxjs/toolkit';
import doctorsSlice from './doctors/doctorsSlice';
import { usersSlice } from './users';

const reducer = combineReducers({
  users: usersSlice.reducer,
  doctorsReducer: doctorsSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
