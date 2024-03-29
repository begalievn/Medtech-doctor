import axios from "axios";
import { BASE_URL } from "../utils/consts/apiConsts";

const accessToken = localStorage.getItem('accessToken');

export const axiosInstance =  axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})

export const axiosWithContentBlob = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  responseType: 'arraybuffer'
})

export const axiosForImage = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  }
})

export const testAxios = axios.create({
  baseURL: 'http://neomedtech.herokuapp.com',
})