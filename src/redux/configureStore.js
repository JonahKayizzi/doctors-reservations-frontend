import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    doctorReducer,
  },
});

export default store;
