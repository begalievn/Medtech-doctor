import React, { useState } from "react";
import { Box } from "@mui/system";
import { InputLabel } from "@mui/material";
import IconTextField from "../useful/IconTextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

import classes from "./auth.module.css";
import AuthButton from "../useful/AuthButton";
import { useSelector } from "react-redux";
import { Controller, useForm, useFormState } from "react-hook-form";
import AuthService from "../../services/AuthService";

function PassRecCode() {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const authUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(authUser.email, data.code);
    try {
      const response = await AuthService.checkResetCode(
        authUser.email,
        data.code
      );
      console.log("RESPONSE", response.data.text);
      localStorage.setItem("token", response.data.text);
      setLoading(false);
      navigate("/forgot-password/new-password");
    } catch (e) {
      console.log("ERROR", e.response.data);
      setLoading(false);
      setErrorMessageVisible(true);
      setTimeout(() => {
        setErrorMessageVisible(false);
      }, 1000);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={""}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Восстановление пароля</h4>
            </div>
            <Box sx={{ marginBottom: "40px" }}>
              <p className={classes.email_sent_to}>
                Новый пароль был отправлен на вашу почту
              </p>
              <p className={classes.email_sent_to_email}>{authUser.email}</p>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel
                sx={{
                  marginLeft: "8px",
                  color: "#A8A8A8",
                  fontSize: "16px",
                }}
              >
                Код
              </InputLabel>

              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <IconTextField
                    {...field}
                    fullWidth
                    type={passwordVisible ? "text" : "password"}
                    sx={{
                      height: "50px",
                      fontSize: "16px",
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
              <div
                style={{ marginTop: "10px" }}
                className={
                  errorMessageVisible
                    ? classes.error_message
                    : classes.error_message_invisible
                }
              >
                <p>Не верно введены данные</p>
              </div>
            </Box>
          </div>
          <div className={classes.submit_button}>
            <AuthButton text={isLoading ? "Загрузка..." : "Продолжить"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecCode;
