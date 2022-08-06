import { Box, Grid } from "@mui/material";
import classes from "../job.module.css";
const JobDefinition = () => {
  return (
    <Grid container>
      <h1 style={{ textAlign: "center", margin: " 1rem auto" }}>
        Job definition
      </h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid className={classes.inputBox}>
              <label>Address</label>
              <input className={classes.input} type="text" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            Right
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default JobDefinition;
