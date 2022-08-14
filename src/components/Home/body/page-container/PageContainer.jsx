import React from 'react';

// styles
import classes from './pageContainer.module.css';

const PageContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default PageContainer;
