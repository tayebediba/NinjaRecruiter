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
import { useForm } from "react-hook-form";
import {
  CreateJob,
  GetJobEssentialSkills,
  GetSkills,
} from "../../../../services/jobApi";
import { CommonFilter } from "../../../../services/searcheApi";
import classes from "../job.module.css";
const JobDefinition = () => {
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);
  const [terms, setTerms] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      employerId: localStorage.getItem("userId"),
      isFixed: true,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    CreateJob(data).then((res) => {
      if (res.status === 200) {
        console.log(res, "data");
      }
    });
  };
  const id = 2;
  useEffect(() => {
    CommonFilter(id, terms).then((res) => {
      console.log("CommonFilter", res);
      setData(res.data.data);
    });
    GetSkills().then((res) => {
      console.log("GetSkills", res);
      setSkill(res.data);
    });
  }, [terms]);

  return (
    <Grid container className={classes.container}>
      <h1 className={classes.titleHeader}>Job definition</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Grid container className={classes.containerInput}>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Title</label>
              <input
                {...register("title")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Salary paid(min)</label>
              <input
                {...register("salaryMin")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Annual leave</label>
              <input
                {...register("annualLeave")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>job seeker Salary</label>

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
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Essential skills</label>
              <Autocomplete
                className={classes.TextField}
                multiple
                id="tags-outlined"
                options={skill}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...register("essentialSkills")}
                    style={{ position: "revert" }}
                    {...params}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Email</label>
              <input
                {...register("email")}
                className={classes.input}
                type="text"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Hours of work</label>
              <input
                {...register("hoursOfWork")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Salary paid(max)</label>
              <input
                {...register("salaryMax")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Hire companies</label>
              <Autocomplete
                className={classes.TextField}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={data.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    onChange={(e) => setTerms(e.target.value)}
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Exact amount received</label>
              <input
                {...register("exactAmountRecived")}
                className={classes.input}
                type="text"
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Unnecessary skills</label>
              <Autocomplete
                className={classes.TextField}
                multiple
                id="tags-outlined"
                options={skill}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...register("unnecessarySkills")}
                    style={{ position: "revert" }}
                    {...params}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputBox}>
              <label>Description</label>
              <input
                {...register("description")}
                className={classes.input}
                type="text"
              />
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
                <Button
                  className={classes.styleNext}
                  type="submit"
                  variant="contained"
                >
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
