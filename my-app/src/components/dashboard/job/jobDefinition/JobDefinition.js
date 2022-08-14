import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import classes from "../job.module.css";
const JobDefinition = () => {
  return (
    <Grid container>
      <h1 className={classes.titleHeader}>Job definition</h1>
      <form className={classes.form}>
        <Grid container className={classes.containerInput}>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Title</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Salary paid(min)</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Annual leave</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>job seeker Salary</label>
              <TextField
                className={classes.TextField}
                id="outlined-select-currency"
                select
                // value={currency}
                // onChange={handleChange}
                placeholder="Percent"
              >
                <MenuItem>{/* {option.label} */}</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Essential skills</label>
              <Autocomplete
                className={classes.TextField}
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField style={{ position: "revert" }} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Email</label>
              <input className={classes.input} type="text" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Hours of work</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Salary paid(max)</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Hire companies</label>
              <TextField
                className={classes.TextField}
                id="outlined-select-currency"
                select
                // value={currency}
                // onChange={handleChange}
                placeholder="Percent"
              >
                <MenuItem>{/* {option.label} */}</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Exact amount received</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Unnecessary skills</label>
              <Autocomplete
                className={classes.TextField}
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField style={{ position: "revert" }} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Description</label>
              <input className={classes.input} type="text" />
            </Grid>
            <Grid item xs={12} className={classes.btn}>
              <Stack
                spacing={2}
                direction="row"
                style={{ justifyContent: "right", marginRight: "1rem" }}
              >
                <Button className={classes.styleBack} variant="outlined">
                  Back
                </Button>
                <Button className={classes.styleNext} variant="contained">
                  Next
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
export default JobDefinition;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
];
