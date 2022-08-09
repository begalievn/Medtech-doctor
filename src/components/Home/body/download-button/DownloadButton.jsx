// modules
import React from 'react';

// rtk-queries
import {useGetPatientsExcelQuery} from "../../../../store/features/patients/patientsApi";


// assets
import { downloadIcon } from '../../../../assets/icons/icons';

// styles
import classes from './downloadButton.module.css';
import {axiosWithContentBlob, axiosWithToken} from "../../../../api/axios";

const DownloadButton = ({ text, patients }) => {

  const { data, isLoading, error } = useGetPatientsExcelQuery("");
  console.log("Downloaded Excel", data);

  const handleClick = async () => {
    if(patients) {
      console.log("Download Patients");
      try {
        const response = await axiosWithContentBlob("/patient/excel/get-patients");
        console.log("excel", response.data);
      }catch(err) {
        console.log(err);
      }
    }

  }


  return (
    <button onClick={handleClick} className={classes.button}>
      <p>{text}</p>
      <img src={downloadIcon} alt="icon" />
    </button>
  );
};

export default DownloadButton;
