import React from 'react';

import classes from './navContainer.module.css';

const NavContainer = ({ children, style }) => {
  return (
    <div style={style} className={classes.container}>
      {children}
    </div>
  );
};

export default NavContainer;
