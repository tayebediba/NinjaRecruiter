import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import login from "../../../assets/img/login.png";
import "./authLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <Grid container item xs={12} direction="row" className="containerLogin">
      <Grid item md={6} xs={12} className="imageBox">
      
        <img className="img" src={login} alt="NinjaRecruiter" />
      </Grid>
      <Grid className="card" item md={6} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
export default AuthLayout;
