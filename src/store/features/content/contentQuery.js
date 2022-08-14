import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../utils/consts/apiConsts";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllContent: builder.query({
      query: () => ({
        url: "/content/get-all",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    updateContent: builder.mutation({
      query: (data) => ({
        url: "/content/update",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
    }),
    uploadImageContentById: builder.mutation({
      query: ({ contentId, imageData }) => ({
        url: `/image/upload/content/${contentId}`,
        method: "POST",
        body: imageData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
  }),
});

export const { useGetAllContentQuery, useUpdateContentMutation, useUploadImageContentByIdMutation } = contentApi;