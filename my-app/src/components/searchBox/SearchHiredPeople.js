import { useEffect, useState } from "react";
import {
  Autocomplete,
  Chip,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { CommonFilter } from "../../services/searcheApi";
import classes from "./searchBox.module.css";
const SearchHiredPeople = () => {
  const [search, setSearch] = useState([]);
  const [terms, setTerms] = useState("");

  const id = 2;
  useEffect(() => {
    CommonFilter(id, terms).then((res) => {
      console.log("CommonFilter", res);
      setSearch(res.data.data);
    });
  }, [terms]);
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          className={classes.TextFieldSearch}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={search.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              placeholder="Search Hired People..."
              onChange={(e) => setTerms(e.target.value)}
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Stack direction="row" spacing={1} className={classes.buttonsGroup}>
          <Chip label="Clickable" />
          <Chip label="Clickable" />
          <Chip label="Clickable" />
          <Chip label="Clickable" />
        </Stack>
      </FormControl>
    </>
  );
};
export default SearchHiredPeople;
