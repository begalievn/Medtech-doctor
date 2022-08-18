// modules
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import { Box } from "@mui/system";
import { InputLabel } from "@mui/material";
import { useForm, Controller, useFormState } from "react-hook-form";
import { setUser } from "../../store/features/auth/authSlice";
import TextFieldComponent from "../useful/TextFieldComponent";
import AuthButton from "../useful/AuthButton";

// utils
import { axiosInstance } from "../../api/axios";

// constants
import { SEND_RESET_CODE_URL } from "../../utils/consts/apiConsts";

// utils
import { loginValidation } from "./validation";

// styles
import classes from "./auth.module.css";

function PassRecEmail() {
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    shouldFocusError: true,
  });
  const { errors } = useFormState({ control });
  const [isLoading, setLoading] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(SEND_RESET_CODE_URL, {
        email: data.email,
      });

      const email = response.data.email;
      console.log(email);
      setLoading(false);
      dispatch(setUser({ email }));
      localStorage.setItem("userEmail", email);
      navigate("code");
    } catch (e) {
      console.log("ERROR", e);
      setErrorMessageVisible(true);
      setLoading(false);
      setTimeout(() => {
        setErrorMessageVisible(false);
      }, 1000);
    }
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Восстановление пароля</h4>
            </div>

            <Box sx={{ marginTop: "65px" }}>
              <InputLabel sx={{ marginLeft: "8px", color: "#A8A8A8" }}>
                Почта
              </InputLabel>

              <Controller
                name="email"
                control={control}
                rules={loginValidation}
                render={({ field }) => (
                  <TextFieldComponent
                    errors={errors}
                    styles={{ marginBottom: "30px" }}
                    {...field}
                  />
                )}
              />
            </Box>
            <div
              className={
                errorMessageVisible
                  ? classes.error_message
                  : classes.error_message_invisible
              }
            >
              <p>Не верно введены данные</p>
            </div>
          </div>
          <div className={classes.submit_button}>
            <AuthButton text={isLoading ? "Загрузка..." : "Отправить"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecEmail;
