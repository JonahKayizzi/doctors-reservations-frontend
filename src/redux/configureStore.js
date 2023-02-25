import { configureStore } from '@reduxjs/toolkit';
import addDoctorReducer from './Doctors/doctor';

const store = configureStore({
  reducer: {
    doctor: addDoctorReducer,
  },
});

export default store;
