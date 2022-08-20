// modules
import React, { useState } from "react";
import { InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

// components
import { Box } from "@mui/system";
import IconTextField from "../useful/IconTextField";
import AuthButton from "../useful/AuthButton";
import {Controller, useForm, useFormState} from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// utils
import {axiosInstance} from "../../api/axios";

// constants
import {UPDATE_PASSWORD_URL} from "../../utils/consts/apiConsts";

// styles
import classes from "./auth.module.css";
import {codeValidation} from "./validation";

function PassRecNewPassword() {
  const { control, handleSubmit } = useForm({ mode: "onChange",});
  const { errors, isDirty, isValid } = useFormState({ control });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.put(
        UPDATE_PASSWORD_URL,
        { email, text: data.password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      navigate("/");
    } catch (e) {
      console.log("ERROR", e.response.data);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form__upper}>
            <div className={classes.title}>
              <h4 className={classes.title_h4}>Новый пароль</h4>
            </div>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel sx={{ marginLeft: "8px", color: "#A8A8A8" }}>
                Пароль*
              </InputLabel>
              <Controller
                name="password"
                control={control}
                rules={codeValidation}
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
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel sx={{ marginLeft: "8px", color: "#A8A8A8" }}>
                Подтвердите пароль*
              </InputLabel>
              <Controller
                name="password2"
                control={control}
                rules={codeValidation}
                render={({ field }) => (
                  <IconTextField
                    {...field}
                    fullWidth
                    type={confirmPasswordVisible ? "text" : "password"}
                    sx={{
                      height: "50px",
                      fontSize: "16px",
                    }}
                    iconEnd={
                      confirmPasswordVisible ? (
                        <VisibilityIcon
                          onClick={() => {
                            setConfirmPasswordVisible(!confirmPasswordVisible);
                          }}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={() =>
                            setConfirmPasswordVisible(!confirmPasswordVisible)
                          }
                        />
                      )
                    }
                  />
                )}
              />
            </Box>
          </div>
          <div className={classes.submit_button}>
            <AuthButton disabled={ !isValid || !isDirty } text={"Войти"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecNewPassword;
