import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Switch,
} from "@mui/material";

// import Switch from "@material-ui/Switch";
// import searchIcon from "../../../assets/img/icons8-google.svg";
// import http from "../../../services/httpService";
// import { setTokenCookies } from "../../../helper/cookies";
// import { useHistory } from "react-router-dom";

import classes from "../inputStyle.module.css";

const SignIn = ({ setIsForgotPass, switcher }, props) => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const changeHandler = () => {
  //     setShowPassword((prevState) => !prevState);
  //   };

  //   const history = useHistory();
  //   const logIn = async (e, userName, password) => {
  //     e.preventDefault();

  //     await http
  //       .post("/Account/SignIn", {
  //         userName: userName.toString(),
  //         password: password.toString(),
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         const Data = {
  //           token: res.data.accessToken,
  //           tokenExp: res.data.accessTokenExpirationTime,
  //           refreshToken: res.data.refreshToken,
  //           refreshTokenExp: res.data.refreshTokenExpirationTime,
  //         };
  //         setTokenCookies(Data);
  //         history.push("/dashboard");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <Grid container className={classes.signIn}>
      <form className={classes.formSignIn}>
        <label>ایمیل</label>
        <Input
          className={classes.inputStyle}
          type="mail"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
          required
          disableUnderline={true}
          placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
        />

        <label>رمز عبور</label>
        <Input
          className={classes.inputStyle}
          onChange={(e) => setPassword(e.target.value)}
          required
          // value={password}
          type={showPassword ? "text" : "password"}
          disableUnderline={true}
          placeholder="رمز فعلی"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                // onClick={() => changeHandler((prevState) => !prevState)}
              >
                <Switch color="secondary" />
              </IconButton>
            </InputAdornment>
          }
        />

        <div className={classes.checkLink}>
          <div className={classes.checkbox}>
            <input type="checkbox" id="save_info" name="save_info" />
            <label>ذخیره اطلاعات</label>
          </div>
          <div className={classes.linkBox}>
            <p
              className={classes.forgotPassLink}
              onClick={() => setIsForgotPass(true)}
            >
              رمز عبور را فراموش کرده ام
            </p>
          </div>
        </div>
        <Button
          className={classes.auth}
          type="submit"
          onClick={(e) => logIn(e, userName, password)}
        >
          ورود
        </Button>
        {/* <span className="and">
          <div className="line"></div>
          ورود با
          <div className="line"></div>
        </span> */}

        {/* <Button className="Account_google">
          <span>
            <img src={searchIcon} alt="google account" />
          </span>
          حساب گوگل
        </Button> */}
        <div className={classes.linkSignIn}>
          <p>
            حساب کاربری ندارید؟<span onClick={switcher}>ثبت نام کنید</span>
          </p>
        </div>
      </form>
    </Grid>
  );
};

export default SignIn;
