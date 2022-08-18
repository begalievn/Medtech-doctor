// modules
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Controller, useForm, useFormState} from "react-hook-form";

// utils
import {axiosInstance} from "../../api/axios";

// components
import {Box} from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {InputLabel} from "@mui/material";
import IconTextField from "../useful/IconTextField";
import AuthButton from "../useful/AuthButton";

// constants
import {CHECK_RESET_CODE_URL} from "../../utils/consts/apiConsts";

// styles
import classes from "./auth.module.css";

function PassRecCode() {
  const {control, handleSubmit} = useForm();
  const {errors} = useFormState({control});
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(CHECK_RESET_CODE_URL, {
          email,
          "text": data.code
        }
      );
      localStorage.setItem("token", response.data.text);
      setLoading(false);
      navigate("/forgot-password/new-password");
    } catch (e) {
      console.log("ERROR", e.response);
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
            <Box sx={{marginBottom: "40px"}}>
              <p className={classes.email_sent_to}>
                Новый пароль был отправлен на вашу почту
              </p>
              <p className={classes.email_sent_to_email}>{email}</p>
            </Box>
            <Box sx={{marginBottom: "30px"}}>
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
                render={({field}) => (
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
                style={{marginTop: "10px"}}
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
            <AuthButton text={isLoading ? "Загрузка..." : "Продолжить"}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassRecCode;
