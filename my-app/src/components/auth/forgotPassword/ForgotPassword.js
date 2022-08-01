import { useState } from "react";
import { Button, Grid, Input, InputAdornment } from "@mui/material";
import ResetPassword from "../resetPassword/ResetPassword";
import { Email } from "@mui/icons-material";
import "./forgotPassword.css";
import "../inputStyles.css";

const ForgotPassword = ({ click }) => {
  const [userName, setUserName] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  console.log(resetPassword);

  // const forgotPasswordHandler = (e, userName) => {
  //   e.preventDefault();
  //   http
  //     .post("/Account/ForgetPassword", {
  //       userName,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setResetPassword(res.data.success);
  //     })
  //     .catch(() => {
  //       setResetPassword(false);
  //     });
  // };
  return (
    <Grid container className="forgetBox">
      {resetPassword ? (
        <ResetPassword />
      ) : (
        <>
          <form className="form-forgotPassword">
            <h3 className="titel"> Forgot password </h3>
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
            <Button
              className="auth"
              type="submit"
              // onClick={(e) => forgotPasswordHandler(e, userName)}
            >
              Send password recovery link
            </Button>
            <div className="link-signIn">
              <p>
                Remember your password?
                <span onClick={() => click()}>Sign in</span>
              </p>
            </div>
          </form>
        </>
      )}
    </Grid>
  );
};
export default ForgotPassword;
