import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    doctorsReducer,
  },
});

export default store;
