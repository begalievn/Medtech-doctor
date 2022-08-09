import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/consts/apiConsts";

export const patientsApi = createApi({
  reducerPath: "patientsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPatients: builder.query({
      query: () => ({
        url: `/patient/get-all`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getAllCheckListsOfPatientById: builder.query({
      query: (patientId) => ({
        url: `/patient/patients-checklists/${patientId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      })
    }),
    getPatientsExcel: builder.query({
      query: () => ({
        url: `/patient/excel/get-patients`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      })
    })
  }),
});

export const { useGetAllPatientsQuery, useGetAllCheckListsOfPatientByIdQuery, useGetPatientsExcelQuery } = patientsApi;
