import React, { useState } from "react";

// import AuthLayout from "../authLayout/AuthLayout";
import Button from "../../../common/buttons/Button";
import AuthLayout from "../authLayout/AuthLayout";
// import SignIn from "../signIn/SignIn";
// import SignUp from "../signUp/SignUp";
// import ForgotPassword from "../forgotPassword/ForgotPassword";
import classes from "./auth.module.css";

const Auth = (props) => {
  const [switcher, setSwitcher] = useState(props.location.data);
  const [isForgotPass, setIsForgotPass] = useState(false);

  const handleClick = () => {
    setIsForgotPass(false);
  };
  return (
    <AuthLayout>
      <Grid item xs={10} sm={10} className={classes.authLayoutContainer}>
        <Paper className={classes.loginBox}>
          {isForgotPass ? (
            <ForgotPassword click={handleClick} />
          ) : (
            <>
              <div>
                <Button
                  btnType={switcher ? ` btnSignIn active` : ` btnSignIn`}
                  click={() => setSwitcher(true)}
                >
                  ورود
                </Button>
                <Button
                  btnType={!switcher ? ` btnSignUp active` : ` btnSignUp`}
                  click={() => setSwitcher(false)}
                >
                  ثبت نام
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
