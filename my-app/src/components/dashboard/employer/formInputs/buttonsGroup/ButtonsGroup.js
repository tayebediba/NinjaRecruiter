import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from "./buttonsGroup.module.css"
import { NavLink } from 'react-router-dom';
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button className={classes.styleBack} variant="outlined">Back</Button>
  
      <NavLink to="/EducationalBackground">

      <Button className={classes.styleNext} variant="contained">Next</Button>


      </NavLink>
    </Stack>
  );
}