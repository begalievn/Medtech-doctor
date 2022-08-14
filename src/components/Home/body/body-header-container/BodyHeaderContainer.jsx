// modules
import React from 'react';

// styles
import classes from './bodyHeaderContainer.module.css';

const BodyHeaderContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default BodyHeaderContainer;
