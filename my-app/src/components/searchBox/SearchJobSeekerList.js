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
const SearchJobSeekerList = () => {
  const [search, setSearch] = useState([]);
  const [terms, setTerms] = useState("");
  const [cheaps, setCheaps] = useState([]);

  const id = 3;
  useEffect(() => {
    CommonFilter(id, terms).then((res) => {
      console.log("CommonFilter", res);
      setSearch(res.data.data);
      console.log(id, terms);
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
              placeholder="Search Job Seeker..."
              onChange={(e) => {
                setTerms(e.target.value);
                setCheaps(e.target.value);
              }}
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </FormControl>
      <Stack direction="row" spacing={1} className={classes.buttonsGroup}>
        {cheaps && cheaps.map((item) => <Chip label={item} />)}
      </Stack>
    </>
  );
};
export default SearchJobSeekerList;
