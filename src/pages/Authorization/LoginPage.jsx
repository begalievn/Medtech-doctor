import React from 'react';
import Login from '../../components/Auth/Login';
import { Routes, Route } from 'react-router-dom';

import classes from './authPages.module.css';
import PassRecEmail from '../../components/Auth/PassRecEmail';
import PassRecCode from '../../components/Auth/PassRecCode';
import PassRecNewPassword from '../../components/Auth/PassRecNewPassword';

function LoginPage() {
  return (
    <div className={classes.auth__container}>
      <div className={classes.auth__container_layer}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<PassRecEmail />} />
          <Route path="/forgot-password/code" element={<PassRecCode />} />
          <Route
            path="/forgot-password/new-password"
            element={<PassRecNewPassword />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default LoginPage;
