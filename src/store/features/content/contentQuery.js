import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/consts/apiConsts";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: "cors",
  }),
  tagTypes: ["Content", "Contacts"],
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
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    // Here are the queries for contacts
    getAllContacts: builder.query({
      query: () => ({
        url: "/contact/get-all",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    updateContact: builder.mutation({
      query: (body) => ({
        url: "/contact/update",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: body,
      }),
      invalidatesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: (body) => ({
        url: "/contact/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: body,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetAllContentQuery,
  useUpdateContentMutation,
  useUploadImageContentByIdMutation,
  useGetAllContactsQuery,
  useUpdateContactMutation,
  useCreateContactMutation,
} = contentApi;
