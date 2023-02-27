<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    doctorReducer,
  },
=======
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import doctorsReducer from './Doctors/doctor';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
>>>>>>> e6849fe (Add implementation doctors with slices)
});

export default store;
