// modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Login from '../../components/Auth/Login';
import PassRecEmail from '../../components/Auth/PassRecEmail';
import PassRecCode from '../../components/Auth/PassRecCode';
import PassRecNewPassword from '../../components/Auth/PassRecNewPassword';
import ErrorPage from "../ErrorPage/ErrorPage";

// styles
import classes from './authPages.module.css';

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default LoginPage;
