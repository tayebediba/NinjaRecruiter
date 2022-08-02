import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import AuthLayout from "../authLayout/AuthLayout";
import Button from "../../../common/buttons/Button";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import ForgotPassword from "../forgotPassword/ForgotPassword";
import "./auth.css";

const Auth = (props) => {
  const [switcher, setSwitcher] = useState(props.location);
  const [isForgotPass, setIsForgotPass] = useState(false);

  const handleClick = () => {
    setIsForgotPass(false);
  };
  return (
    <AuthLayout>
      <Grid item xs={12} md={12} className="authLayout-container">
        <div className="loginBox">
          {isForgotPass ? (
            <ForgotPassword click={handleClick} />
          ) : (
            <>
              <div>
                <Button
                  btnType={!switcher ? ` btn_signUp active` : ` btn_signUp`}
                  click={() => setSwitcher(false)}
                >
                  Sign in
                </Button>
                <Button
                  btnType={switcher ? ` btn_signIn active` : ` btn_signIn`}
                  click={() => setSwitcher(true)}
                >
                  Sign up
                </Button>
              </div>
              {switcher ? (
                <SignUp switcher={() => setSwitcher(true)} />
              ) : (
                <SignIn
                  setIsForgotPass={setIsForgotPass}
                  switcher={() => setSwitcher(false)}
                />
              )}
            </>
          )}
        </div>
      </Grid>
    </AuthLayout>
  );
};

export default Auth;
