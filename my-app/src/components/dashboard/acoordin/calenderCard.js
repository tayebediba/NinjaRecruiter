import { Grid } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import CalenderBox from "../calender/calenderBox";
import classes from "./accordin.module.css";

const CalenderCard = () => {
  return (
    <Grid container style={{ width: "100%", margin: "1rem auto " }}>
      <Grid item xs={12} className={classes.calenderBox}>
        <Grid item xs={12} md={6} className={classes.boxCenter}>
          <div className={classes.backgroundCalender}>
            <CalenderBox />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.boxCenter}>
          <div className={classes.meetingBox}>
            <div>
              <h2>My meetings</h2>
              <h3>Intervew with Rafie at 14</h3>
              <h3>Call with mina at 10</h3>
            </div>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <AccessAlarmIcon />
              Remind me
            </h3>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CalenderCard;
