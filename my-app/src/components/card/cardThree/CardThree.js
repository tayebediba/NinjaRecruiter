import React from "react";

import ImgMap from "../../../assets/img/map.png"
import Button from "@mui/material/Button";

import classes from "../cardThree/card.Three.module.css";
const CardThree = () => {
  return (
    <>
      <div className={classes.DownloadApplication}>
        <img src={ImgMap} alt="appImg" />

        <div className={classes.app}>
          <h1>Finde a job wherever you are in the Word</h1>
          <p>
            Let the job find out Let the jobs find you Let the job find you Let
            tje jobs find you Let
          </p>

          <Button className={classes.btn} variant="contained">
            Start Now
          </Button>
        </div>
      </div>
    </>
  );
};
export default CardThree;
