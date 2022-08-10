import { Button, Grid, MenuItem, TextField } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import classes from "../jobSeeker.module.css";

const PersonalInformation = ({ setPage }) => {
  return (
    <Grid container style={{ width: "100%", margin: "rem auto" }}>
      <Grid sx={6} md={12}>
        <Grid sx={12} md={6} className={classes.formInputs}>
          <h1 style={{ textAlign: "center", margin: " 1rem auto" }}>
            Employer Information
          </h1>
          <Grid className={classes.form}>
            <div className={classes.leftSide}>
              <div className={classes.firstNAme}>
                <label>First name</label>
                <input className={classes.input} type="text" />

                <div className={classes.Country}>
                  <label>Country</label>
                  <TextField
                    className={classes.TextField}
                    id="outlined-select-currency"
                    select
                    // value={currency}
                    // onChange={handleChange}
                    placeholder="Percent"
                  >
                    <MenuItem>{/* {option.label} */}</MenuItem>
                  </TextField>
                </div>
                <div className={classes.linkdinPAge}>
                  <label>Linkdin page Address </label>
                  <input className={classes.input} type="text" />
                </div>
              </div>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.lastName}>
                <label>Last name</label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.email}>
                <label>Email</label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.resumeUpload}>
                <div className={classes.upload}>
                  <p>Upload resume</p>
                  <CloudUploadOutlinedIcon />
                </div>
              </div>
            </div>
          </Grid>
          <div className={classes.buttons}>
            <Button
              onClick={() => setPage(1)}
              className={classes.styleNext}
              variant="contained"
            >
              Next
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PersonalInformation;
