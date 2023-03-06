import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import doctorsSlice from './doctors/doctorsSlice';
import reservationsSlice from './reservations/reservationsSlice';
import { usersSlice } from './users';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  users: usersSlice.reducer,
  doctorsReducer: doctorsSlice.reducer,
  reservationsReducer: reservationsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export default store;
export { persistor };
