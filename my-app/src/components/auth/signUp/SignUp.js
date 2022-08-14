import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Switch,
} from "@mui/material";
import { useState } from "react";
import { Person, Email, Lock, RemoveRedEye } from "@mui/icons-material";
import apple from "../../../assets/img/icon/apple.svg";
import linkedIn from "../../../assets/img/icon/linkedIn.svg";
import Google from "../../../assets/img/icon/Google.svg";
import facebook from "../../../assets/img/icon/facebook.svg";
import "../inputStyles.css";
import { senOtpService } from "../../../services/authService";

const SignUp = ({ switcher }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const changeHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const sendOTPHandler = () => {
    senOtpService(userName, password, email).then((res) => {
      if (res.status === 200) {
        setUserName("");
        setPassword("");
        setEmail("");
        console.log(res, "data");
      }
    });
  };

  return (
    <Grid container>
      <form className="form_signUp">
        <Input
          className="input_style"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          disableUnderline={true}
          placeholder="Name"
          startAdornment={
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          }
        />
        <Input
          className="input_style"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => changeHandler((prevState) => !prevState)}
              >
                <RemoveRedEye />
              </IconButton>
            </InputAdornment>
          }
        />

        <Button className="auth" type="submit" onClick={sendOTPHandler}>
          Sign up
        </Button>
        <span className="and">
          <div className="line"></div>
          <h2> or sign up with</h2>
          <div className="line"></div>
        </span>
        <Grid container className="icon-Box">
          <Grid item xs={6} md={3}>
            <img src={apple} alt="apple" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={linkedIn} alt="linkedIn" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={Google} alt="Google" />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={facebook} alt="facebook" />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
export default SignUp;
