import React from 'react';
import { Box } from '@mui/system';
import { InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { loginValidation } from './validation';

import classes from './auth.module.css';
import TextFieldComponent from '../useful/TextFieldComponent';
import AuthButton from '../useful/AuthButton';

function PassRecEmail() {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    navigate('code');
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Восстановление пароля</h4>
            </div>
            <Box>
              <InputLabel sx={{ marginLeft: '8px', color: '#A8A8A8' }}>
                Логин
              </InputLabel>
              <Controller
                name="login"
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
            </Box>
          </div>
          <div className={classes.form__lower}>
            <AuthButton text={'Отправить'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecEmail;
