import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
  users: null,
};

const URL = 'http://127.0.0.1:3000/api/v1/users';

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (payload) => {
    const response = await axios.post(URL, { user_name: payload });
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload.id;
      sessionStorage.setItem('user', action.payload.id);
    },
    [fetchUser.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.users = null;
      sessionStorage.removeItem('user');
    },
  },
});

export default usersSlice.reducer;
