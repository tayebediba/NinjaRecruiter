import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import SearchBox from "../../../searchBox/SearchJob";

import classes from "./employerList.module.css";
import {
  Box,
  Fab,
  FormControl,
  Grid,
  IconButton,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  GetEmployerById,
  GetEmployerList,
} from "../../../../services/employerApi";
import { Search } from "@mui/icons-material";
import SearchEmployers from "../../../searchBox/SearchEmployers";
import FormInputs from "../formInputs/FormInputs";
import EditEmployer from "./editEmployer/EditEmployer";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
margin:1rem;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 70%;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  width:100%;

  & input {
  width:100%;
  background-color:#D9D9D9;
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div>
      <div className={classes.inputSearch}>
        <SearchIcon className={classes.SearchIcon} />
      </div>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  // position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EmployerList = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    GetEmployerList().then((res) => {
      console.log("getEmployerList", res);
      setData(res);
    });
  }, []);

  return (
    <Grid container className={classes.container}>
      <SearchEmployers />
      {top100Films.slice(page - 1, page + 3).map((data) => {
        return (
          <div className={classes.editAccount}>
            <div className={classes.card} key={data.id}>
              <div className={classes.person}>
                <div style={{ display: "flex" }}>
                  <h1 style={{ marginRight: "1rem" }}>{data.firstName}</h1>

                  <h1>{data.lastName}</h1>
                </div>
                <p>
                  For a job seeker:{data.exactAmountRecived} of annual income{" "}
                </p>
              </div>
              <div className={classes.icons}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <DeleteIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={handleOpen}
                >
                  <EditIcon className={classes.icon} />
                </IconButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <EditEmployer
                    //  id={data.employerId}
                    />
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        );
      })}

      <div className={classes.Pagination}>
        <Pagination
          count={Math.ceil(top100Films.length / 4)}
          className={classes.colorPagination}
          page={page}
          onChange={handleChange}
        />
      </div>
    </Grid>
  );
};
export default EmployerList;

const top100Films = [
  { employerId: 1, title: "The Shawshank Redemption", year: 1994 },
  { employerId: 3, title: "The Godfather", year: 1972 },
  { employerId: 5, title: "The Godfather: Part II", year: 1974 },
  { employerId: 6, title: "The Dark Knight", year: 2008 },
  { employerId: 7, title: "12 Angry Men", year: 1957 },
  { employerId: 9, title: "Schindler's List", year: 1993 },
  { employerId: 77, title: "Pulp Fiction", year: 1994 },
  {
    employerId: 4,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { employerId: 23, title: "The Good, the Bad and the Ugly", year: 1966 },
  { employerId: 33, title: "Fight Club", year: 1999 },
  {
    employerId: 67,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  // {
  //  employerId:2, title: "Star Wars: Episode V - The Empire Strikes Back",
  //   year: 1980,
  // },
  // {employerId:2, title: "Forrest Gump", year: 1994 },
  // {employerId:2, title: "Inception", year: 2010 },
  // {
  //  employerId:2, title: "The Lord of the Rings: The Two Towers",
  //   year: 2002,
  // },
  // {employerId:2, title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  // {employerId:2, title: "Goodfellas", year: 1990 },
  // {employerId:2, title: "The Matrix", year: 1999 },
  // {employerId:2, title: "Seven Samurai", year: 1954 },
  // {
  //  employerId:2, title: "Star Wars: Episode IV - A New Hope",
  //   year: 1977,
  // },
  // {employerId:2, title: "City of God", year: 2002 },
  // {employerId:2, title: "Se7en", year: 1995 },
  // {employerId:2, title: "The Silence of the Lambs", year: 1991 },
  // {employerId:2, title: "It's a Wonderful Life", year: 1946 },
  // {employerId:2, title: "Life Is Beautiful", year: 1997 },
  // {employerId:2, title: "The Usual Suspects", year: 1995 },
  // {employerId:2, title: "Léon: The Professional", year: 1994 },
  // {employerId:2, title: "Spirited Away", year: 2001 },
  // {employerId:2, title: "Saving Private Ryan", year: 1998 },
  // {employerId:2, title: "Once Upon a Time in the West", year: 1968 },
  // {employerId:2, title: "American History X", year: 1998 },
  // {employerId:2, title: "Interstellar", year: 2014 },
  // {employerId:2, title: "Casablanca", year: 1942 },
  // {employerId:2, title: "City Lights", year: 1931 },
  // {employerId:2, title: "Psycho", year: 1960 },
  // {employerId:2, title: "The Green Mile", year: 1999 },
  // {employerId:2, title: "The Intouchables", year: 2011 },
  // {employerId:2, title: "Modern Times", year: 1936 },
  // {employerId:2, title: "Raiders of the Lost Ark", year: 1981 },
  // {employerId:2, title: "Rear Window", year: 1954 },
  // {employerId:2, title: "The Pianist", year: 2002 },
  // {employerId:2, title: "The Departed", year: 2006 },
  // {employerId:2, title: "Terminator 2: Judgment Day", year: 1991 },
  // {employerId:2, title: "Back to the Future", year: 1985 },
  // {employerId:2, title: "Whiplash", year: 2014 },
  // {employerId:2, title: "Gladiator", year: 2000 },
  // {employerId:2, title: "Memento", year: 2000 },
  // {employerId:2, title: "The Prestige", year: 2006 },
  // {employerId:2, title: "The Lion King", year: 1994 },
  // {employerId:2, title: "Apocalypse Now", year: 1979 },
  // {employerId:2, title: "Alien", year: 1979 },
  // {employerId:2, title: "Sunset Boulevard", year: 1950 },
];
