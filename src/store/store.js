// modules
import { configureStore } from "@reduxjs/toolkit";

// reducers
import scheduleReducer from "./features/schedule/scheduleSlice";
import authReducer from "./features/auth/authSlice";
import patientsReducer from './features/patients/patientsSlice';


// rtk-query apis
import {patientsApi} from "./features/patients/patientsApi";
import { doctorsAPI} from "./features/doctors/doctorsQuery";


export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    auth: authReducer,
    patients: patientsReducer,

    [patientsApi.reducerPath]: patientsApi.reducer,
    [doctorsAPI.reducerPath]: doctorsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      patientsApi.middleware,
      doctorsAPI.middleware
    )
});


