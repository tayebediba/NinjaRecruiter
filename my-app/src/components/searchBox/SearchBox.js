import { Search } from "@mui/icons-material";
import { Fab, FormControl, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./searchBox.module.css";
const SearchBox = () => {
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          className={classes.textFild}
          placeholder="Search..."
          id="outlined-adornment-amount"
          startAdornment={<Search position="start" />}
        />
      </FormControl>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <div className={classes.buttonsGroup}>
          <Fab className={classes.fab} variant="extended">
            Text
          </Fab>
          <Fab className={classes.fab} variant="extended">
            Text
          </Fab>
          <Fab className={classes.fab} variant="extended">
            Text
          </Fab>
          <Fab className={classes.fab} variant="extended">
            Text
          </Fab>
          <Fab className={classes.fab} variant="extended">
            Text
          </Fab>
        </div>
      </Box>
    </>
  );
};
export default SearchBox;
