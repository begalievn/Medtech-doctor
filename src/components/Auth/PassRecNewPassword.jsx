import { Box } from '@mui/system';
import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import IconTextField from '../useful/IconTextField';

import classes from './auth.module.css';
import AuthButton from '../useful/AuthButton';

function PassRecNewPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    navigate('/main');
    console.log('Submit button clicked');
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={onSubmit}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Новый пароль</h4>
            </div>
            <Box>
              <InputLabel sx={{ marginLeft: '8px', color: '#A8A8A8' }}>
                Пароль*
              </InputLabel>
              <IconTextField
                fullWidth
                type={passwordVisible ? 'test' : 'password'}
                sx={{
                  height: '50px',
                  fontSize: '16px',
                  marginBottom: '40px',
                }}
                iconEnd={
                  passwordVisible ? (
                    <VisibilityOffIcon
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    />
                  )
                }
              />
              <InputLabel sx={{ marginLeft: '8px', color: '#A8A8A8' }}>
                Пароль*
              </InputLabel>
              <IconTextField
                fullWidth
                type={confirmPassVisible ? 'text' : 'password'}
                sx={{
                  height: '50px',
                  fontSize: '16px',
                }}
                iconEnd={
                  confirmPassVisible ? (
                    <VisibilityOffIcon
                      onClick={() => {
                        setConfirmPassVisible(!confirmPassVisible);
                      }}
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={() => {
                        setConfirmPassVisible(!confirmPassVisible);
                      }}
                    />
                  )
                }
              />
            </Box>
          </div>
          <div className={classes.form__lower}>
            <AuthButton text={'Войти'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecNewPassword;
