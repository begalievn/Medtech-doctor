import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './mainPage.module.css';

const MainPageComp = ({ title, paragraph, backgroundImage, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={classes.main_page_comp}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.main_page_comp__transparency_layer}>
        <div className={classes.main_page_comp__content}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <button onClick={handleClick}>Перейти</button>
        </div>
      </div>
    </div>
  );
};

export default MainPageComp;
