import React, { useState } from 'react';
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

function Login() {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });
  const [isLoading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = loginAuth(data)
        .then((data) => {
          console.log('data', data.status);
          if (data.status === 200) {
            setLoading(false);
            navigate('/main');
          }
        })
        .catch((err) => {
          console.log('error', err);
          setLoading(false);
        });
    } catch (err) {
      if (err.response?.status === 403) {
        console.log('Error');
      }
      setLoading(false);
      console.log('error', err);
    }
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Вход</h4>
            </div>
            <Box sx={{ marginBottom: '40px' }}>
              <InputLabel sx={{ marginLeft: '8px', color: '#A8A8A8' }}>
                Логин
              </InputLabel>
              <Controller
                name="email"
                control={control}
                rules={loginValidation}
                render={({ field }) => (
                  <TextFieldComponent
                    errors={errors}
                    styles={{ marginBottom: '21px' }}
                    {...field}
                  />
                )}
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
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <IconTextField
                    {...field}
                    fullWidth
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
                )}
              />
            </Box>
          </div>

          <div className={classes.form__lower}>
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
