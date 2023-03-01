import { combineReducers, configureStore } from '@reduxjs/toolkit';
import doctorsSlice from './doctors/doctorsSlice';
import reservationsSlice from './reservations/reservationsSlice';
import { usersSlice } from './users';

const reducer = combineReducers({
  users: usersSlice.reducer,
  doctorsReducer: doctorsSlice.reducer,
  reservationsReducer: reservationsSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
export { reducer };
