import React from "react";
import classes from "./home.module.css";
import { Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Card from "../card/Card";
import CardTwo from "../cardTwo/CardTwo";
import CardThree from "../card/cardThree/CardThree";
import Footer from "../footer/Footer";
import logo from "../../assets/img/icon/logo.svg";
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
      {/* <div className={classes.navBtn}>
      
      </div> */}
      <Grid item xs={12} className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            <div className={classes.navLogin}>
              {isLogin ? (
                <li className={`${classes.btnAccount} ${classes.nav}`}>
                  <Link to="/dashboard">Account</Link>
                </li>
              ) : (
                <>
                  <li className={`${classes.btnSignUp} ${classes.nav}`}>
                    <PersonIcon />
                    <Link to="/login">LogIn</Link>
                  </li>
                </>
              )}
            </div>
            <li>Job creation</li>
          </ul>
          <div className={classes.logo}>
            <img src={logo} alt="logo" className={classes.imgLogo} />
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
      <Footer />
    </Grid>
  );
};
export default Home;
