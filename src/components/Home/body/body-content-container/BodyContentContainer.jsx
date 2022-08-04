import React from 'react';

import classes from './bodyContentContainer.module.css';

const BodyContentContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default BodyContentContainer;
