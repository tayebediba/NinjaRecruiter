import React from "react";
import classes from "./footer.module.css";
import AppleIcon from "@mui/icons-material/Apple";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import logoFooter from "../../assets/img/icon/logoFooter.svg";
const Footer = () => {
  return (
    <div className={classes.navFooter}>
      <footer className={classes.footerList}>
        <ul>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
        </ul>
        <ul>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
        </ul>
        <ul>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
        </ul>
        <ul>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
          <li>sample</li>
        </ul>
        <ul>
          <li>socialMedia</li>
          <div className={classes.socialMedia}>
            <li>
              <AppleIcon className={classes.color} />
            </li>
            <li>
              <LinkedInIcon className={classes.color} />
            </li>
            <li>
              <GoogleIcon className={classes.color} />
            </li>
            <li>
              <FacebookIcon className={classes.color} />
            </li>
          </div>
        </ul>
      </footer>
      <div className={classes.footerBotton}>
        <div className={classes.logoFooter}>
          <img src={logoFooter} alt="logoFooter" />
          <p>
            Let the jobs find you Let the jobs find you Let the jobs find you
            Let the jobs find you Let{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
