import React, { useState } from "react";

// import http from "../../../services/httpService";

import classes from "../inputStyle.module.css";

const SignUp = ({ switcher }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //   const changeHandler = () => {
  //     setShowPassword((prevState) => !prevState);
  //   };
  //   const register = async (e, userName, password) => {
  //     e.preventDefault();
  //     console.log(userName, password);
  //     await http
  //       .post("/Account/SignUp", {
  //         userName,
  //         password,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   };

  return (
    <Grid container>
      <form className={classes.formSignUp}>
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
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
          type={showPassword ? "text" : "password"}
          disableUnderline={true}
          placeholder="رمز فعلی"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => changeHandler((prevState) => !prevState)}
              >
                <Switch color="secondary" />
              </IconButton>
            </InputAdornment>
          }
        />

        <div className={classes.rules}>
          <input type="checkbox" />
          <label>
            <span style={{ color: "#5243ac" }}>قوانین</span> پونیشارا مطالعه
            نموده و می پذیرم
          </label>
        </div>
        <Button
          className={classes.auth}
          type="submit"
          // onClick={(e) => register(e, userName, password)}
        >
          ثبت نام
        </Button>
        <div className={classes.linkSignIn} style={{ margin: "1rem 0" }}>
          <p>
            قبلا ثبت نام کرده اید؟<span onClick={switcher}>وارد شوید</span>
          </p>
        </div>
      </form>
    </Grid>
  );
};
export default SignUp;
