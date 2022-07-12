import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './features/schedule/scheduleSlice';

export default configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});
