import axios from "axios";
import { BASE_URL } from "../utils/consts/apiConsts";

const accessToken = localStorage.getItem('accessToken');

export default axios.create({
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
    "Content-Type": "blob",
  }
})

export const testAxios = axios.create({
  baseURL: 'http://neomedtech.herokuapp.com',
})