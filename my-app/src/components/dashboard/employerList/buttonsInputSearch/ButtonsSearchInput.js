import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import classes from "./buttonsSaarchInput.module.css";
const ButtonsSearchInput = () => {
  return (
    <Box  sx={{ "& > :not(style)": { m: 1 } }}>
      <div className={classes.buttonsGroup} >
      <Fab  variant="extended">Text</Fab>
      
      </div>
    </Box>
  );
};
export default ButtonsSearchInput;
