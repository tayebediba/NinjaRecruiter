import { Avatar, Grid } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CalenderBox from "./calenderBox";
import AddIcon from "@mui/icons-material/Add";

import classes from "./calender.module.css";

const Calendar = () => {
  return (
    <Grid container style={{ width: "90%", margin: "1rem auto " }}>
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
            <h3>
              <AccessAlarmIcon />
              Remind me
            </h3>
          </div>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <h1 style={{ color: "#737373" }}>Messages</h1>
        <hr />
      </Grid>
      <Grid item xs={12} className={classes.MessageBox}>
        <Grid xs={12} md={6}>
          {[1, 2, 3, 4].map((i) => {
            return (
              <div key={i} className={classes.cardMessage}>
                <Avatar alt="Remy Sharp" />
                <div style={{ textAlign: "left" }}>
                  <h2>title</h2>
                  <p>text</p>
                </div>
                <h2>date</h2>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
          <div className={classes.cardText}>
            <AddIcon className={classes.AddIcon} />
            text
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Calendar;
