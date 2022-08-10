import { Avatar, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CalenderCard from "../acoordin/calenderCard";
import classes from "./calender.module.css";

const Calendar = () => {
  return (
    <Grid container style={{ width: "90%", margin: "1rem auto " }}>
      <CalenderCard />
      <Grid xs={12}>
        <h1 style={{ color: "#737373" }}>Messages</h1>
        <hr />
      </Grid>
      <Grid item xs={12} className={classes.MessageBox}>
        <Grid item xs={12} md={6}>
          {[1, 2, 3, 4].map((i) => {
            return (
              <div key={i} className={classes.cardMessage}>
                <Avatar alt="Remy Sharp" />
                <div style={{ textAlign: "left", paddingRight: "1rem" }}>
                  <h2>title</h2>
                  <p>text</p>
                </div>
                <h2 style={{ padding: "1rem" }}>date</h2>
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
