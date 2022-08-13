import React from "react";

import classes from "./card.module.css";
import ImgApp from "../../../src/assets/img/phone.png"

import Button from '@mui/material/Button';

const Card = (props) => {
  return (
   <>
    
  
    <div className={classes.DownloadApplication}>
      <img src={ImgApp} alt="appImg" />

      <div className={classes.app}>
        <h1>Download application</h1>
        <Button className={classes.btn} variant="contained">
          Download
        </Button>
      </div>
    </div>
    </>
  );
};
export default Card;
