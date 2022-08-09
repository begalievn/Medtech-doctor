import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meetings: [],
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const {} = scheduleSlice.actions;

export default scheduleSlice.reducer;
