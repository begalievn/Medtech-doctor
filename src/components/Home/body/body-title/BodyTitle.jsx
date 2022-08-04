import React from 'react';

import classes from './bodyTitle.module.css';

const BodyTitle = ({ title }) => {
  return <h1 className={classes.title}>{title}</h1>;
};

export default BodyTitle;
