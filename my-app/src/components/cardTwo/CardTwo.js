import React from "react";

import classes from "./cardTwo.module.css";
import ManImg from "../../../src/assets/img/man.png"
import Woman from "../../../src/assets/img/women.png"
import Button from '@mui/material/Button';

const Card = (props) => {
  return (
   <>
    
  
    <div className={classes.personMan}>
      <img src={ManImg} alt="appImg" />

      <div className={classes.app}>
        <h1>Title of Dialog Sed ut perspiciatis unde omnis iste</h1>
        <p>Let the job find out Let the jobs find you Let the job find you Let tje jobs find you Let</p>
        <Button className={classes.btn} variant="outlined">
          Learn more
        </Button>
      </div>
    </div>


    <div className={classes.personWoman}>
      <img src={Woman} alt="appImg" />

      <div className={classes.app}>
        <h1>Title of Dialog Sed ut perspiciatis unde omnis iste</h1>
        <p>Let the job find out Let the jobs find you Let the job find you Let tje jobs find you Let</p>
        <Button className={classes.btn} variant="outlined">
          Learn more
        </Button>
      </div>
    </div>
    </>
  );
};
export default Card;
