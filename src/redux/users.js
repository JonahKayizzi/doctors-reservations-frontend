import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: 'user',
};

const URL = 'http://127.0.0.1:3000/api/v1/users';

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (payload) => {
    const response = await axios.post(URL, payload);
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
      state.users = action.payload.user_id;
    },
  },
});

export default usersSlice.reducer;
