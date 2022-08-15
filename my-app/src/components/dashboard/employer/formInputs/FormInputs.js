import classes from "./form.module.css";
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
const FormInputs = () => {
  return (
    <Grid container className={classes.container}>
      <Grid sx={12} md={6} className={classes.formInputs}>
        <h1 className={classes.title}>Employer Information</h1>
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
                <Autocomplete
                  className={classes.TextField}
                  disablePortal
                  id="combo-box-demo"
                  options={[{ title: "Percent" }, { title: "Fixed" }]}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField style={{ position: "revert" }} {...params} />
                  )}
                />
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
              <Autocomplete
                className={classes.TextField}
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField style={{ position: "revert" }} {...params} />
                )}
              />
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
