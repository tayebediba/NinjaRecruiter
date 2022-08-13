import classes from "./form.module.css";
import { Button, Grid, MenuItem, Stack, TextField } from "@mui/material";
const FormInputs = () => {
  return (
    <Grid container className={classes.container}>
      <Grid sx={12} md={6} className={classes.formInputs}>
        <h1 className={classes.title} >
          Employer Information
        </h1>
        <Grid className={classes.form}>
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
        </Grid>
        <div className={classes.buttons}>
          <Stack spacing={2} direction="row">
            <Button className={classes.styleBack} variant="outlined">
              Back
            </Button>

            <Button className={classes.styleNext} variant="contained">
              Next
            </Button>
          </Stack>
        </div>
      </Grid>
    </Grid>
  );
};
export default FormInputs;
