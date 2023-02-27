import { createAsyncThunk } from '@reduxjs/toolkit';

// consts
const ADD_DOC = 'ADD_DOC';
const GET_DOC = 'GET_DOC';
const DEC_DOC = 'DEC_DOC';

// reducer
export default function addDoctorReducer(state = [], action) {
  switch (action.type) {
    case GET_DOC:
      return action.payload;
    case ADD_DOC:
      return [...state, action.payload];
    case DEC_DOC:
      return state.filter((doctor) => doctor.id !== action.payload.id);
    default:
      return state;
  }
}

// action
export const getDoctor = createAsyncThunk(GET_DOC, async () => {
  const response = await fetch('http://localhost:3000/api/v1/doctors');
  return response.json();
});

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

export const DeleteDoctor = createAsyncThunk(DEC_DOC, async (id) => {
  const response = await fetch(`http://localhost:3000/api/v1/doctors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});
