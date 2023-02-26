import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getDoctorsData = createAsyncThunk(
  'doctors/getDoctorsData',
  async () => {
    const resp = await fetch('http://localhost:3000/api/v1/doctors')
      .then((resp) => resp.json())
      .then((result) => result);
    return resp;
  },
);

const deleteDoctor = createAsyncThunk(
  'doctors/deleteDoctor',
  async (id) => {
    const resp = await fetch(`http://localhost:3000/api/v1/doctors/${id}`, { method: 'Delete' })
      .then((resp) => resp.json())
      .then((result) => result);
    return resp;
  },
);

const doctorsSlice = createSlice({
  name: 'greeting',
  initialState: {
    loading: false,
    doctors: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctorsData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getDoctorsData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      doctors: action.payload,
    }));
    builder.addCase(getDoctorsData.rejected, (state, action) => ({
      ...state,
      loading: false,
      doctors: [],
      error: action.error.message,
    }));
    builder.addCase(deleteDoctor.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(deleteDoctor.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      doctors: [
        ...state.doctors.filter((doctor) => doctor.id !== action.payload.id),
      ],
    }));
    builder.addCase(deleteDoctor.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default doctorsSlice.reducer;
export { getDoctorsData, deleteDoctor };
