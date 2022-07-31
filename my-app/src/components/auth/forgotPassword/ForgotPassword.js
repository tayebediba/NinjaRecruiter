import { useState } from "react";
import { Button, Grid, Input } from "@mui/material";
import "./forgotPassword.css";
import "../inputStyles.css";
import ResetPassword from "../resetPassword/ResetPassword";

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
          <h3 className="titel">فراموشی رمز عبور</h3>
          <form className="form-forgotPassword">
            <label htmlFor="input_email">ایمیل</label>

            <Input
              className="input_style"
              type="text"
              required
              // value={userName}
              // onChange={(e) => setUserName(e.target.value)}
              disableUnderline={true}
              placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
            />
            <Button
              className="auth"
              type="submit"
              // onClick={(e) => forgotPasswordHandler(e, userName)}
            >
              ارسال لینک بازیابی رمز
            </Button>
            <div className="link-signIn">
              <p>
                رمز عبور را به خاطر دارید؟
                <span
                // onClick={() => click()}
                >
                  وارد شوید
                </span>
              </p>
            </div>
          </form>
        </>
      )}
    </Grid>
  );
};
export default ForgotPassword;
