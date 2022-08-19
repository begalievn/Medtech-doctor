import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/consts/apiConsts";

const authWithToken = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Schedule"],
  endpoints: (builder) => ({
    getAllScheduleForToday: builder.query({
      query: () => ({
        url: `/schedule/get-all-for-today`,
        headers: authWithToken,
      }),
    }),
    searchSchedulesByDoctorName: builder.query({
      query: (doctorName) => ({
        url: `/schedule/get-all-by-doctors-full-name/${doctorName}`,
        headers: authWithToken,
      }),
      providesTags: ["Schedule"],
    })
  }),
});

export const {
  useGetAllScheduleForTodayQuery,
  useLazySearchSchedulesByDoctorNameQuery,
} = scheduleApi;
