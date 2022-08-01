import React from "react";
import classes from "./home.module.css";
import { Grid } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import Card from "../card/Card";
import CardTwo from "../cardTwo/CardTwo";
import CardThree from "../card/cardThree/CardThree";
import Footer from "../footer/Footer";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { userIsLogin } from "../../helper/general";


const Home = () => {
  let location = useLocation();
  const isLogin = userIsLogin();
  console.log("LOGIN", isLogin);
  useEffect(() => {}, [location]);
  return (

      <Grid container>
      <div className={classes.navBtn}>
        {isLogin ? (
          <button className={`${classes.btnAccount} ${classes.btn}`}>
            <Link to="/dashboard">حساب کاربری</Link>
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
      <Grid item xs={12}  className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            <div className={classes.navLogin}>
              <li>Log In</li>
              <PersonIcon />
            </div>
            <li>Job creation</li>
          </ul>
          <div className={classes.logo}>
            <h1>Logo</h1>
          </div>
        </nav>
        <div className={classes.titleHeader}>
          <h1>Seek and you shall find Log in now</h1>
        </div>
      </Grid>
      <Card />;
      <div className={classes.title}>
        <h1>Tittle</h1>
      </div>
      <CardTwo />
      <CardThree />
      <Footer/>

      


    </Grid>


      

  );
};
export default Home;
