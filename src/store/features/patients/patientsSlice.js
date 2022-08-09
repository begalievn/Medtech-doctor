import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patientById: {},
  patientsList: {},
}

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatientById: (state, action) => {
      state.patientById = action.payload;
    },
    setPatientsList: (state, action) => {
      state.patientsList = action.payload;
    }
  }
})

export const { setPatientById, setPatientsList } = patientsSlice.actions;

export default patientsSlice.reducer;