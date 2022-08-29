import classes from "./editEmployer.module.css";
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
// import {
//   CreateEmployer,
//   GetEmployerAcivityFields,
// } from "../../../../services/employerApi";
// import { useForm } from "react-hook-form";
import { GetEmployerById } from "../../../../../services/employerApi";
const EditEmployer = () => {
  const [getId, setGetId] = useState([]);
  const id = 6;
  useEffect(() => {
    GetEmployerById(id).then((res) => {
      console.log("GetEmployerById", res);
      setGetId(res);
      console.log(id);
    });
  }, [id]);

  return (
    <Grid container className={classes.container}>
      <Grid item sx={12} md={6} className={classes.formInputs}>
        <h1 className={classes.title}>Employer Information</h1>

        {getId.map((data) => {
          return (
            <form className={classes.form}>
              <div className={classes.leftSide}>
                <div className={classes.firstNAme}>
                  <label>First name</label>
                  <input
                    className={classes.input}
                    type="text"
                    //   value={data.firstName}
                  />
                  <div className={classes.Address}>
                    <label>Address</label>
                    <input
                      className={classes.input}
                      type="text"
                      //  value={data.address}
                    />
                  </div>
                  <div className={classes.email}>
                    <label>Email </label>
                    <input
                      className={classes.input}
                      type="email"
                      //  value={data.email}
                    />
                  </div>
                  <div className={classes.website}>
                    <label>Web site</label>
                    <input
                      className={classes.input}
                      type="text"
                      //  value={data.websiteLink}
                    />
                  </div>
                  <div className={classes.EmploymentCommission}>
                    <label style={{ fontSize: "1rem" }}>
                      Employment commission (Percent/Fixed)
                    </label>

                    <Select
                      className={classes.TextField}
                      labelId="demo-select-small"
                      id="demo-select-small"
                      //  value={data.isFixed}
                      type="boolean"
                    >
                      {/* <MenuItem value={true}>Fixed</MenuItem> */}
                      {/* <MenuItem value={false}>Percent</MenuItem> */}
                    </Select>
                  </div>
                </div>
              </div>
              <div className={classes.rightSide}>
                <div className={classes.lastName}>
                  <label>Last name</label>
                  <input
                    className={classes.input}
                    type="text"
                    //   value={data.lastName}
                  />
                </div>
                <div className={classes.phoneNumber}>
                  <label>phone number</label>
                  <input
                    className={classes.input}
                    type="text"
                    //   value={data.phoneNumber}
                  />
                </div>
                <div className={classes.SubjectOfActivity}>
                  <label>Subject of activity</label>
                  <Autocomplete
                    className={classes.TextField}
                    disablePortal
                    id="combo-box-demo"
                    options={data.fieldOfActivityId}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField style={{ position: "revert" }} {...params} />
                    )}
                  />
                </div>

                <div className={classes.necessaryExplanation}>
                  <label>Necessary explanation</label>
                  <input
                    className={classes.input}
                    type="text"
                    //   value={data.necessaryExplanation}
                  />
                </div>
                <div className={classes.ExactAmountReceived}>
                  <label>Exact amount received </label>
                  <input
                    className={classes.input}
                    type="text"
                    //   value={data.exactAmountRecived}
                  />
                </div>

                <div className={classes.buttons}>
                  <Stack spacing={2} direction="row">
                    <Button className={classes.styleBack} variant="outlined">
                      cansel
                    </Button>

                    <Button
                      className={classes.styleNext}
                      type="submit"
                      variant="contained"
                    >
                      update
                    </Button>
                  </Stack>
                </div>
              </div>
            </form>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default EditEmployer;

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
