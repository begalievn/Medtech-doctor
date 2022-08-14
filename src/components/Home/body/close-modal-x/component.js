// modules
import React from 'react';

// styles
import classes from './style.modal.scss'

const CloseModalX = ({onClick, style}) => {
  return (
    <div className={classes.close} onClick={onClick} style={style}></div>
  );
};

export default CloseModalX;