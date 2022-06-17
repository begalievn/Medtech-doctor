import React from 'react';
import { useNavigate } from 'react-router-dom';

import medtechLogo from '../../assets/images/medtech-logo.svg';

import classes from './mainPage.module.css';

const MainPageIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className={classes.main_page_intro}>
      <div className={classes.main_page_intro__transparency_layer}>
        <div className={classes.main_page_header}>
          <img src={medtechLogo} alt="medtech-logo" />
        </div>
        <div className={classes.main_page_intro__content}>
          <p>Ваш личный кабинет</p>
          <h1>Med Tech</h1>
          <p>
            Решение которое помогает автомотизировать ваш процесс работы с
            пациентами
          </p>
          <button onClick={handleClick}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default MainPageIntro;
