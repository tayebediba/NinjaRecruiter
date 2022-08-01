import { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Switch,
} from "@mui/material";
import { Email, Lock, RemoveRedEye } from "@mui/icons-material";
import apple from "../../../assets/img/icon/apple.svg";
import linkedIn from "../../../assets/img/icon/linkedIn.svg";
import Google from "../../../assets/img/icon/Google.svg";
import facebook from "../../../assets/img/icon/facebook.svg";
// import searchIcon from "../../../assets/img/icons8-google.svg";
import "../inputStyles.css";

const SignIn = ({ setIsForgotPass, switcher }, props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const changeHandler = () => {
  //   setShowPassword((prevState) => !prevState);
  // };

  // const history = useHistory();
  // const logIn = async (e, userName, password) => {
  //   e.preventDefault();

  //   await http
  //     .post("/Account/SignIn", {
  //       userName: userName.toString(),
  //       password: password.toString(),
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       const Data = {
  //         token: res.data.accessToken,
  //         tokenExp: res.data.accessTokenExpirationTime,
  //         refreshToken: res.data.refreshToken,
  //         refreshTokenExp: res.data.refreshTokenExpirationTime,
  //       };
  //       setTokenCookies(Data);
  //       history.push("/dashboard");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Grid container className="signIn">
      <form className="form_signIn">
        <Input
          className="input_style"
          type="email"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
          required
          disableUnderline={true}
          placeholder="Email"
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />

        <Input
          className="input_style"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
          type={showPassword ? "text" : "password"}
          disableUnderline={true}
          placeholder="Password"
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
              // onClick={() => changeHandler((prevState) => !prevState)}
              >
                <RemoveRedEye />
              </IconButton>
            </InputAdornment>
          }
        />

        <div className="check_link">
          <div className="linkBox">
            <p className="forgotPassLink" onClick={() => setIsForgotPass(true)}>
              Forgot password
            </p>
          </div>
        </div>
        <Button
          className="auth"
          type="submit"
          // onClick={(e) => logIn(e, userName, password)}
        >
          Sign up
        </Button>
        <span className="and">
          <div className="line"></div>
          <h2> or sign up with</h2>
          <div className="line"></div>
        </span>
        <Grid container className="icon-Box">
          <Grid item md={3}>
            <img src={apple} alt="apple" />
          </Grid>
          <Grid item md={3}>
            <img src={linkedIn} alt="linkedIn" />
          </Grid>
          <Grid item md={3}>
            <img src={Google} alt="Google" />
          </Grid>
          <Grid item md={3}>
            <img src={facebook} alt="facebook" />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignIn;
