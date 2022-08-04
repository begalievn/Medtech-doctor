import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: "",
    userData: {
      email: null,
      otpUsed: null,
      userId: null,
      role: null,
      accessToken: null,
      refreshToken: null,
      something: "yesss",
    },
    userToken: null,
    accessToken: null,
    refreshToken: null,
    role: [2001, 1984],
    error: null,
    success: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.userInfo = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAuth,
  setUser,
  setUserData,
  setAccessToken,
  setRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
