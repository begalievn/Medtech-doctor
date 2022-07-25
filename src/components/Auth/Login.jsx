import React, { useState, useRef } from 'react';
import { InputLabel, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconTextField from '../useful/IconTextField';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { loginValidation } from './validation';
import { Link, useNavigate } from 'react-router-dom';
import classes from './auth.module.css';
import TextFieldComponent from '../useful/TextFieldComponent';
import AuthButton from '../useful/AuthButton';
import { loginAuth } from '../../api/auth-api/auth';
import AuthService from '../../services/AuthService';
import { useEffect } from 'react';

function Login() {
  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [login, pwd]);

  const handleSubmit = async (e) => {
    setLoading(true);

    try {
    } catch (err) {}
  };

  console.log(login);
  console.log(pwd);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Вход</h4>
            </div>
            <div
              className={
                errorMessageVisible
                  ? classes.error_message
                  : classes.error_message_invisible
              }
            >
              <p>Не верный Логин или Пароль</p>
            </div>
            <Box sx={{ marginBottom: '30px' }}>
              <InputLabel sx={{ marginLeft: '8px', color: '#A8A8A8' }}>
                Логин
              </InputLabel>
              <TextFieldComponent
                styles={{ marginBottom: '21px' }}
                value={login}
                inputRef={loginRef}
                onChange={(e) => setLogin(e.target.value)}
                id
              />

              <InputLabel
                sx={{
                  marginLeft: '8px',
                  color: '#A8A8A8',
                  fontSize: '16px',
                }}
              >
                Пароль
              </InputLabel>
              <IconTextField
                fullWidth
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type={passwordVisible ? 'text' : 'password'}
                sx={{
                  height: '50px',
                  fontSize: '16px',
                }}
                iconEnd={
                  passwordVisible ? (
                    <VisibilityIcon
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    />
                  )
                }
              />
            </Box>
          </div>

          <div className={classes.submit_button}>
            {/* <p>Incorrect Fields</p> */}
            <AuthButton text={isLoading ? 'Loading...' : 'Войти'} />
          </div>
        </form>
        <div className={classes.forgot_password}>
          <Link style={{ textDecoration: 'none' }} to="forgot-password">
            <p>Забыли пароль?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
