import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    meetings: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = scheduleSlice.actions;

export default scheduleSlice.reducer;
