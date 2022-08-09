import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    patients: [],
    doctors: [],
    admins: [],
    superAdmins: [],
  },
  reducers: {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
