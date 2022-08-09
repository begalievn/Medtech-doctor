// modules
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// constants
import {BASE_URL} from "../../../utils/consts/apiConsts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      }),
      providesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
    })
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;