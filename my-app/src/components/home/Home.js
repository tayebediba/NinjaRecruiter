import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { userIsLogin } from "../../helper/general";
import classes from "./home.module.css";
const Home = () => {
  let location = useLocation();
  const isLogin = userIsLogin();
  console.log("LOGIN", isLogin);
  useEffect(() => {}, [location]);
  return (
    <Grid container>
      <h1>Home</h1>
      <div className={classes.navBtn}>
        {isLogin ? (
          <button className={`${classes.btnAccount} ${classes.btn}`}>
            {/* <img src={account} alt="account-svg" /> */}
            <Link to={{ path: "/dashboard" }}>حساب کاربری</Link>
          </button>
        ) : (
          <>
            <button className={`${classes.btnSignIn} ${classes.btn}`}>
              <Link to="/login"> ورود</Link>
            </button>
            <button className={`${classes.btnSignUp} ${classes.btn}`}>
              <Link to="/signUp"> ثبت نام</Link>
            </button>
          </>
        )}
      </div>
    </Grid>
  );
};
export default Home;
