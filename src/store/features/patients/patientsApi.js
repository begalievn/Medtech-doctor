import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/consts/apiConsts";

const authWithToken = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};

export const patientsApi = createApi({
  reducerPath: "patientsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Patient", "CheckList"],
  endpoints: (builder) => ({
    getAllPatients: builder.query({
      query: () => ({
        url: `/patient/get-all`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getPatientsExcel: builder.query({
      query: () => ({
        url: `/patient/excel/get-patients`,
        headers: authWithToken,
      }),
    }),
    getPatientProfile: builder.query({
      query: (patientId) => ({
        url: `/patient/get-profile-web/${patientId}`,
        headers: authWithToken,
      }),
    }),
    getPatientMedCardInfoById: builder.query({
      query: (patientId) => ({
        url: `/patient/get-med-card-info/${patientId}`,
        headers: authWithToken,
      })
    }),
    updatePatientMedCard: builder.mutation({
      query: (body) => ({
        url: `/patient/update-med-card`,
        method: "PUT",
        headers: authWithToken,
        body: body,
      }),
      invalidatesTags: ["Patient"]
    }),
    searchPatients: builder.query({
      query: (username) => ({
        url: `/patient/get-all-by-parameter/${username}`,
        headers: authWithToken,
      }),
      providesTags: ["Patient"],
    }),
    getAllCheckListsOfPatientById: builder.query({
      query: (patientId) => ({
        url: `/patient/patients-checklists/${patientId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Patient"],
    }),
    updateCheckListAnswers: builder.mutation({
      query: (body) => ({
        url: '/answer/fill-answers',
        method: 'PUT',
        headers: authWithToken,
        body: body
      }),
      providesTags: ["CheckList"]
    }),
    createPatient: builder.mutation({
      query: (body) => ({
        url: "/patient/create",
        method: "POST",
        headers: authWithToken,
        body: body,
      }),
      providesTags: ["Patient"]
    }),
    createCheckList: builder.mutation({
      query: (body) => ({
        url: `/checklist/create`,
        method: "POST",
        headers: authWithToken,
        body: body,
      }),
      providesTags: ["CheckList"]
    }),
    getPatientsByDoctorId: builder.query({
      query: (doctorId) => ({
        url: `/patient/get-all-by-doctor/${doctorId}`,
        headers: authWithToken,
      }),
      providesTags: ["Patient"]
    })
  }),
});

export const {
  useGetAllPatientsQuery,
  useGetAllCheckListsOfPatientByIdQuery,
  useGetPatientsExcelQuery,
  useGetPatientProfileQuery,
  useGetPatientMedCardInfoByIdQuery,
  useUpdatePatientMedCardMutation,
  useLazySearchPatientsQuery,
  useUpdateCheckListAnswersMutation,
  useCreatePatientMutation,
  useCreateCheckListMutation,
  useGetPatientsByDoctorIdQuery,
} = patientsApi;
