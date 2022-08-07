import React from 'react';

import classes from './contentHeaderV2.module.scss';

const ContentHeaderV2 = ({text}) => {
  return (
    <h2 className={classes.header}>{text}</h2>
  );
};

export default ContentHeaderV2;