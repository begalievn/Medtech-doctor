// modules
import React from 'react';

// styles
import classes from './contentSquare.module.scss';

const ContentSquare = ({data, onClick}) => {
  return (
    <div className={classes.container} onClick={onClick}>
      <p>{data[0].weekNumber}</p>
      <p>Неделя</p>
    </div>
  );
};

export default ContentSquare;