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
    }),
    getAllSchedulesByDoctorIdYearMonth: builder.query({
      query: ({doctorId, month, year}) => ({
        url: `/schedule/get-all-by-doctor-year-month/${doctorId}/${year}/${month}`,
        headers: authWithToken,
      })
    }),
    getResultByDoctorDateTime: builder.query({
      query: ({doctorId, localDate, localTime}) => ({
        url: `/schedule/get-by-doctor-date-time/${doctorId}/${localDate}/${localTime}`,
        headers: authWithToken,
      })
    }),
    getDoctorScheduleByDate: builder.query({
      query: ({date, doctorId}) => ({
        url: `/schedule/get-by-doctor-date/${doctorId}/${date}`,
        headers: authWithToken,
      })
    })
  }),
});

export const {
  useGetAllScheduleForTodayQuery,
  useLazySearchSchedulesByDoctorNameQuery,
  useLazyGetAllSchedulesByDoctorIdYearMonthQuery,
  useLazyGetResultByDoctorDateTimeQuery,
  useLazyGetDoctorScheduleByDateQuery,
} = scheduleApi;
