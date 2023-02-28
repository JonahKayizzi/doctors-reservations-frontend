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
    const response = await axios.post(URL, { user: { user_name: payload } });
    return response.data;
  },
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchUser.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
    }));
    builder.addCase(fetchUser.rejected, (state, action) => ({
      ...state,
      loading: false,
      user: null,
      error: action.error.message,
    }));
  },
});

export default usersSlice.reducer;
