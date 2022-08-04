import React from 'react';

import classes from './asideHeaderV2.module.scss'

const AsideHeaderV2 = ({text}) => {
  return (
    <h2 className={classes.header}>
      {text}
    </h2>

  );
};

export default AsideHeaderV2;