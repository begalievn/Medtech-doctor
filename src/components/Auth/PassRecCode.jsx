import React, { useState } from 'react';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import IconTextField from '../useful/IconTextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

import classes from './auth.module.css';
import AuthButton from '../useful/AuthButton';

function PassRecCode() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/forgot-password/new-password');
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={onSubmit}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Восстановление пароля</h4>
            </div>
            <Box sx={{ marginBottom: '120px' }}>
              <InputLabel
                sx={{
                  marginLeft: '8px',
                  color: '#A8A8A8',
                  fontSize: '16px',
                }}
              >
                Код
              </InputLabel>
              <IconTextField
                fullWidth
                type={passwordVisible ? 'password' : 'text'}
                sx={{
                  height: '50px',
                  fontSize: '16px',
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
            </Box>
          </div>
          <div className={classes.form__lower}>
            <AuthButton text={'Перейти'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecCode;
