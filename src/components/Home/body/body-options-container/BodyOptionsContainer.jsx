import React from 'react';

import classes from './bodyOptionsContainer.module.css';

const BodyOptionsContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default BodyOptionsContainer;
