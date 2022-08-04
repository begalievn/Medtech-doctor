import React from 'react';
import { downloadIcon } from '../../../../assets/icons/icons';

import classes from './downloadButton.module.css';

const DownloadButton = ({ text }) => {
  return (
    <button className={classes.button}>
      <p>{text}</p>
      <img src={downloadIcon} alt="icon" />
    </button>
  );
};

export default DownloadButton;
