import axios from "axios";
import { BASE_URL } from "../utils/consts/apiConsts";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },

});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
