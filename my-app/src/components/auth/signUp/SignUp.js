import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Switch,
} from "@mui/material";
import { useState } from "react";

import "../inputStyles.css";


const SignUp = ({ switcher }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const changeHandler = () => {
  //   setShowPassword((prevState) => !prevState);
  // };
  // const register = async (e, userName, password) => {
  //   e.preventDefault();
  //   console.log(userName, password);
  //   await http
  //     .post("/Account/SignUp", {
  //       userName,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <Grid container>
      <form className="form_signUp">
        <label>ایمیل</label>
        <Input
          className="input_style"
          type="mail"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
          required
          disableUnderline={true}
          placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
        />

        <label>رمز عبور</label>
        <Input
          className="input_style"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
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

        <div className="rules">
          <input type="checkbox" />
          <label>
            <span style={{ color: "#5243ac" }}>قوانین</span> پونیشارا مطالعه
            نموده و می پذیرم
          </label>
        </div>
        <Button
          className="auth"
          type="submit"
          // onClick={(e) => register(e, userName, password)}
        >
          ثبت نام
        </Button>
        <div className="link-signIn" style={{ margin: "1rem 0" }}>
          <p>
            قبلا ثبت نام کرده اید؟<span onClick={switcher}>وارد شوید</span>
          </p>
        </div>
      </form>
    </Grid>
  );
};
export default SignUp;
