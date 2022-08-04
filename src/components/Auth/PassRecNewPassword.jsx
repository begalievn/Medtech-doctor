import { Box } from "@mui/system";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

import IconTextField from "../useful/IconTextField";

import classes from "./auth.module.css";
import AuthButton from "../useful/AuthButton";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";

function PassRecNewPassword() {
  const { control, handleSubmit } = useForm();
  const authUser = useSelector((state) => state.auth.user);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const navigate = useNavigate();

  console.log(localStorage.getItem("token"));

  const onSubmit = async (data) => {
    console.log(data);
    console.log("authUser", authUser);
    let dataToSend = {
      email: authUser.email,
      text: data.password.toString(),
    };
    console.log(dataToSend);
    try {
      const token = localStorage.getItem("token");
      console.log({ ...dataToSend });
      const response = await axios.put(
        "https://medtech-neobisx.herokuapp.com/api/v1/user/update_password",
        { ...dataToSend },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // const response = await AuthService.updatePassword(
      //   authUser.email,
      //   data.password.toString(),
      //   token
      // );
      console.log(response);
      navigate("/main");
    } catch (e) {
      console.log("ERROR", e.response.data);
    }
    // console.log("Submit button clicked");
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
            <AuthButton text={"Войти"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecNewPassword;
