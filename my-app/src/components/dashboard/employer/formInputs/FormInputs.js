import classes from "./form.module.css";
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
import {
  CreateEmployer,
  GetEmployerAcivityFields,
} from "../../../../services/employerApi";
import { useForm } from "react-hook-form";
const FormInputs = () => {
  const [data, setData] = useState([]);
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      definerId: localStorage.getItem("userId"),
      isFixed: true,
    },
  });

  useEffect(() => {
    GetEmployerAcivityFields().then((res) => {
      console.log("GetEmployerAcivityFields", res);
      setData(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    CreateEmployer(data).then((res) => {
      if (res.status === 200) {
        console.log(res, "data");
      }
    });
  };

  return (
    <Grid container className={classes.container}>
      <Grid item sx={12} md={6} className={classes.formInputs}>
        <h1 className={classes.title}>Employer Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div className={classes.leftSide}>
            <div className={classes.firstNAme}>
              <label>First name</label>
              <input
                {...register("firstName")}
                className={classes.input}
                type="text"
              />
              <div className={classes.Address}>
                <label>Address</label>
                <input
                  className={classes.input}
                  {...register("address")}
                  type="text"
                />
              </div>
              <div className={classes.email}>
                <label>Email </label>
                <input
                  className={classes.input}
                  {...register("email")}
                  type="email"
                />
              </div>
              <div className={classes.website}>
                <label>Web site</label>
                <input
                  className={classes.input}
                  {...register("websiteLink")}
                  type="text"
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
                  defaultValue={true}
                  type="boolean"
                  {...register("isFixed")}
                >
                  <MenuItem value={true}>Fixed</MenuItem>
                  <MenuItem value={false}>Percent</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.lastName}>
              <label>Last name</label>
              <input
                className={classes.input}
                {...register("lastName")}
                type="text"
              />
            </div>
            <div className={classes.phoneNumber}>
              <label>phone number</label>
              <input
                className={classes.input}
                {...register("phoneNumber")}
                type="text"
              />
            </div>
            <div className={classes.SubjectOfActivity}>
              <label>Subject of activity</label>
              <Autocomplete
                className={classes.TextField}
                disablePortal
                id="combo-box-demo"
                options={data}
                onChange={(e, value) =>
                  setValue("fieldOfActivityId", value.employerAcivityFieldId)
                }
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
                {...register("necessaryExplanation")}
                type="text"
              />
            </div>
            <div className={classes.ExactAmountReceived}>
              <label>Exact amount received </label>
              <input
                className={classes.input}
                {...register("exactAmountRecived")}
                type="text"
              />
            </div>

            <div className={classes.buttons}>
              <Stack spacing={2} direction="row">
                <Button className={classes.styleBack} variant="outlined">
                  Back
                </Button>

                <Button
                  className={classes.styleNext}
                  type="submit"
                  variant="contained"
                >
                  Next
                </Button>
              </Stack>
            </div>
          </div>
        </form>
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
