import classes from "./form.module.css";
import SelectSmall from "./Select";
import BasicButtons from "./buttonsGroup/ButtonsGroup";
import { Grid } from "@mui/material";
const FormInputs = () => {
  return (
    <Grid  container>
      <div className={classes.formInputs}>
        <div className={classes.form}>
          <div className={classes.leftSide}>
            <div className={classes.firstNAme}>
              <label>First name</label>
              <input className={classes.input} type="text" />
              <div className={classes.Address}>
                <label>Address</label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.email}>
                <label>Email </label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.website}>
                <label>Web site</label>
                <input className={classes.input} type="text" />
              </div>
              <div className={classes.EmploymentCommission}>
                <label style={{ fontSize: "1rem" }}>
                  Employment commission (Percent/Fixed)
                </label>
                <SelectSmall />
              </div>
              <div className={classes.FeildOfActivity}>
                <label>Feild of activity</label>
                <input className={classes.input} type="text" />
              </div>
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.lastName}>
              <label>Last name</label>
              <input className={classes.input} type="text" />
            </div>
            <div className={classes.phoneNumber}>
              <label>phone number</label>
              <input className={classes.input} type="text" />
            </div>
            <div className={classes.SubjectOfActivity}>
              <label>Subject of activity</label>
              <input className={classes.input} type="text" />
            </div>
            <div className={classes.necessaryExplanation}>
              <label>Necessary explanation</label>
              <input className={classes.input} type="text" />
            </div>
            <div className={classes.ExactAmountReceived}>
              <label>Exact amount received </label>
              <input className={classes.input} type="text" />
            </div>
          </div>
        </div>
        <div className={classes.buttons}>
          <BasicButtons />
        </div>
      </div>
    </Grid>
  );
};
export default FormInputs;
