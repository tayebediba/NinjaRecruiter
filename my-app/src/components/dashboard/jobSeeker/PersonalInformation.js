import { Grid } from "@mui/material";
import Tab from "../sideBar/tab/Tab";
import Accordin from "../acoordin/Accordin";
import BasicButtons from "../employer/formInputs/buttonsGroup/ButtonsGroup";
import classes from "./jobSeeker.module.css";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SelectSmall from "../employer/formInputs/Select";
const PersonalInformation = () => {
  return (
    <Grid container style={{ width: "100%", margin: "2rem 0" }}>
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
                <div className={classes.linkdinPAge}>
                  <label>Linkdin page Address </label>
                  <input className={classes.input} type="text" />
                </div>
                <div className={classes.Country}>
                  <label>Country</label>
                  <SelectSmall />
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
            <BasicButtons />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PersonalInformation;
