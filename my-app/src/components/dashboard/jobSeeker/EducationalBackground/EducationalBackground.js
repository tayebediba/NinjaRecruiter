import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import classes from "./EducationalBackground.module.css";

const EducationalBackground = ({ setPage }) => {
  return (
    <Grid container style={{ width: "100%", margin: "1rem auto" }}>
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
                <FormControl>
                  <FormLabel
                    style={{ color: "#222831", fontFamily: "Inter-Medium" }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Are you studying
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
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
              <FormControl>
                <FormLabel
                  style={{ color: "#222831", fontFamily: "Inter-Medium" }}
                  id="demo-row-radio-buttons-group-label"
                >
                  Do you want to add academic records
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <div className={classes.buttons}>
            {" "}
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => setPage(1 - 1)}
                className={classes.styleBack}
                variant="outlined"
              >
                Back
              </Button>

              <Button
                onClick={() => setPage(1 + 1)}
                className={classes.styleNext}
                variant="contained"
              >
                Next
              </Button>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EducationalBackground;
