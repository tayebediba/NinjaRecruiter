import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from "./buttonsGroup.module.css"
export default function JobButtons() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button className={classes.styleBack} variant="outlined">cancel</Button>
      <Button className={classes.styleNext} variant="contained">save</Button>
    </Stack>
  );
}