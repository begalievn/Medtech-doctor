// modules
import React from "react";

// assets
import { downloadIcon } from "../../../../assets/icons/icons";

// utils
import { axiosWithContentBlob } from "../../../../api/axios";

// styles
import classes from "./downloadButton.module.css";

const DownloadButton = ({ text, onClick }) => {

  const handleClick = async () => {
    if (true) {
      console.log("Download Patients");
      try {
        const response = await axiosWithContentBlob(
          "/patient/excel/get-patients"
        );
        const url = URL.createObjectURL(new Blob([response.data]));
        console.log('blob', new Blob([response.data]))
        console.log('createObjectURL', url)

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.xlsx"); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.remove()
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <button onClick={onClick} className={classes.button}>
      <p>{text}</p>
      <img src={downloadIcon} alt="icon" />
    </button>
  );
};

export default DownloadButton;
