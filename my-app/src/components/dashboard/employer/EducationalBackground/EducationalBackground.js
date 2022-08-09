import { Grid } from "@mui/material";
import BasicButtons from "../formInputs/buttonsGroup/ButtonsGroup";
import classes from "./EducationalBackground.module.css";
import RadioButton from "./RadioButton";
import RadioButtons from "./RadioButtons";

const EducationalBackground = () => {
  return (
    <Grid container style={{ width: "100%", margin: "2rem 0" }}>
      <Grid sx={6} md={12}>
        <Grid sx={12} md={6} className={classes.formInputs}>
          <h1 style={{ textAlign: "center", margin: " 1rem auto" }}>
            Educational Background{" "}
          </h1>
          <Grid className={classes.form}>
            <div className={classes.leftSide}>
              <div className={classes.jobTitle}>
                <label>Job title</label>
                <input className={classes.input} type="text" />
                <div className={classes.company}>
                  <label> Company</label>
                  <input className={classes.input} type="text" />
                </div>
                <RadioButton />
                
              </div>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.Industry}>
                <label>Industry</label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.Company}>
                <label>Company</label>
                <input className={classes.input} type="text" />
              </div>
              <RadioButtons />
            </div>
          </Grid>
          <div className={classes.buttons}>
            <BasicButtons />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EducationalBackground;
