// modules
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// constants
import { BASE_URL } from "../../../utils/consts/apiConsts";

export const doctorsAPI = createApi({
  reducerPath: "doctorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => ({
        url: '/user',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    }),
    getDoctorsImage: builder.query({
      query: () => ({
        url: `/image/get`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      })
    })
  }) ,
});

export const { useGetDoctorsQuery, useGetDoctorsImageQuery } = doctorsAPI;