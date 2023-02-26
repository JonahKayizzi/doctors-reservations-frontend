import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import doctorsReducer from './doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    doctorsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
