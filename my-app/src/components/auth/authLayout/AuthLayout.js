import React from "react";

import { Link } from "react-router-dom";
import classes from "./authLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      className={classes.containerLogin}
    >
      <Grid className={classes.card} item md={6} xs={12}>
        {children}
      </Grid>

      <Grid item md={6} xs={12} className={classes.imageBox}>
        {/* <Link className={classes.btnBack} to="/">
          back to home
        </Link> */}
        <img className="img" src={authLayoutImg} alt="NinjaRecruiterImg" />
      </Grid>
    </Grid>
  );
};
export default AuthLayout;
