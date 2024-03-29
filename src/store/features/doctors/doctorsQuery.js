// modules
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// constants
import { BASE_URL } from "../../../utils/consts/apiConsts";

const authWithToken = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

export const doctorsAPI = createApi({
  reducerPath: "doctorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Doctor"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => ({
        url: "/user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getDoctorsImage: builder.query({
      query: () => ({
        url: `/image/get`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getAllDoctors: builder.query({
      query: () => ({
        url: `/doctor/get-all`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getDoctorsFullNameEmail: builder.query({
      query: () => ({
        url: `/doctor/get-full-name-email`,
        headers: authWithToken,
      })
    }),
    searchDoctors: builder.query({
      query: (username) => ({
        url: `/doctor/get-all-by-parameter/${username}`,
        headers: authWithToken,
      }),
      providesTags: ["Doctor"],
    }),
    getDoctorProfile: builder.query({
      query: (doctorId) => ({
        url: `/doctor/get-profile/${doctorId}`,
        headers: authWithToken,
      }),
      providesTags: ["Doctor"],
    })
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorsImageQuery,
  useGetAllDoctorsQuery,
  useGetDoctorsFullNameEmailQuery,
  useLazySearchDoctorsQuery,
  useGetDoctorProfileQuery,
} = doctorsAPI;
