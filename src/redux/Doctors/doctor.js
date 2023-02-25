import { createAsyncThunk } from '@reduxjs/toolkit';

// consts
const ADD_DOC = 'ADD_DOC';

// reducer
export default function addDoctorReducer(state = [], action) {
  switch (action.type) {
    case ADD_DOC:
      return [...state, action.payload];
    default:
      return state;
  }
}

// action
export const addDoctor = createAsyncThunk(ADD_DOC, async (obj) => {
  const response = await fetch('http://localhost:3000/api/v1/doctors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return response.json();
});
