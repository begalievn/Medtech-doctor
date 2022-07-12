import axios from 'axios';
import { URL } from '../../utils/consts/apiConsts';

export const loginAuth = async (data) => {
  const res = await axios.post(
    `https://medtech-neobisx.herokuapp.com/api/v1/auth/login`,
    data
  );
  console.log(res);
  return res;
};
