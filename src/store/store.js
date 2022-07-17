import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './features/schedule/scheduleSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    schedule: scheduleReducer,
    auth: authReducer,
  },
});
