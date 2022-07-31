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
      <Grid item xs={10} sm={10} className="authLayout-container">
        <Paper className="loginBox">
          {isForgotPass ? (
            <ForgotPassword click={handleClick} />
          ) : (
            <>
              <div>
                <Button
                  btnType={switcher ? ` btn_signIn active` : ` btn_signIn`}
                  click={() => setSwitcher(true)}
                >
                  Sign in
                </Button>
                <Button
                  btnType={!switcher ? ` btn_signUp active` : ` btn_signUp`}
                  click={() => setSwitcher(false)}
                >
                  Sign up
                </Button>
              </div>
              {switcher ? (
                <SignIn
                  setIsForgotPass={setIsForgotPass}
                  switcher={() => setSwitcher(false)}
                />
              ) : (
                <SignUp switcher={() => setSwitcher(true)} />
              )}
            </>
          )}
        </Paper>
      </Grid>
    </AuthLayout>
  );
};

export default Auth;
