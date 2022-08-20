import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./hiredPeople.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import { Box, Fab, FormControl, Grid, OutlinedInput } from "@mui/material";
import SearchBox from "../../../searchBox/SearchBox";



const HiredPeople = () => {
  return (
    <Grid container className={classes.container}>
      <SearchBox />

      <div className={classes.editAccount}>
        <div className={classes.card}>
          <div className={classes.person}>
            <h1>tayebeh dibazar</h1>
          </div>
          <div className={classes.icons}>
            <DeleteIcon className={classes.icon} />
            <EditIcon className={classes.icon} />
          </div>
        </div>
      </div>

      <div className={classes.Pagination}>
        <Pagination count={10} className={classes.colorPagination} />
      </div>
    </Grid>
  );
};
export default HiredPeople;
