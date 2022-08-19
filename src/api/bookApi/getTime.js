import axios from "axios";
import { URL } from "../../utils/consts/apiConsts";
import { axiosPrivate } from "../axios";

export const getDoctorsByDate = async (data) => {
  const res = await axiosPrivate.get(
    `/get-by-doctor-date/${7}/${"2022-08-18"}`
  );
  console.log(res);
  return res;
};
