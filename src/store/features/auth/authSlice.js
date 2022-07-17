import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isAuth: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setAuth, setUser} = authSlice.actions;

export default authSlice.reducer;