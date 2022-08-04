import React, { useState, useRef, useEffect } from "react";
import { InputLabel, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconTextField from "../useful/IconTextField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import TextFieldComponent from "../useful/TextFieldComponent";
import AuthButton from "../useful/AuthButton";
import { LOGIN_REGEX, PWD_REGEX } from "../../utils/consts/homeConsts";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../utils/consts/apiConsts";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
  setUserData,
} from "../../store/features/auth/authSlice";

function Login() {
  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [validLogin, setValidLogin] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  useEffect(() => {
    setValidLogin(LOGIN_REGEX.test(login));
  }, [login]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [login, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: login, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
          },
          // crossdomain: true,
          // withCredentials: true,
        }
      );

      console.log(response); // log
      dispatch(setUserData(response?.data));
      dispatch(setAccessToken(response?.data.accessToken));
      dispatch(setRefreshToken(response?.data.refreshToken));
      // Setting loading to false
      setLoading(false);

      // Navigating
      if (response?.data?.role === "SUPERADMIN") {
        console.log("SUPERADMIN in the mansion");
        navigate("/home");
      } else if (response?.data?.role === "DOCTOR") {
        console.log("DOCTOR started working");
        navigate("/main");
      }

      // Setting values of input fields to empty strings
      setLogin("");
      setPwd("");
    } catch (err) {
      setLoading(false);
      if (!err?.response) {
        console.log("No Server response");
      } else {
        console.log("Login failed");
      }
    }
  };

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
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel sx={{ marginLeft: "8px", color: "#A8A8A8" }}>
                Логин
              </InputLabel>
              <TextFieldComponent
                styles={{ marginBottom: "25px" }}
                value={login}
                inputRef={loginRef}
                onChange={(e) => setLogin(e.target.value)}
                id
              />

              <InputLabel
                sx={{
                  marginLeft: "8px",
                  color: "#A8A8A8",
                  fontSize: "16px",
                }}
              >
                Пароль
              </InputLabel>
              <IconTextField
                fullWidth
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
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
            </Box>
          </div>

          <div className={classes.submit_button}>
            {/* <p>Incorrect Fields</p> */}
            <AuthButton
              text={isLoading ? "Loading..." : "Войти"}
              disabled={!validLogin || !validPwd || isLoading}
            />
          </div>
        </form>
        <div className={classes.forgot_password}>
          <Link style={{ textDecoration: "none" }} to="forgot-password">
            <p>Забыли пароль?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
