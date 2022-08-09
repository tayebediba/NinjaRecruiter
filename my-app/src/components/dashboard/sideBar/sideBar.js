import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import classes from "./sideBar.module.css";

import { useNavigate } from "react-router";
import { CalendarMonth, Mail, ScreenSearchDesktop } from "@mui/icons-material";
import Person from "@mui/icons-material/Person";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
const style = {
  width: "100%",

  bgcolor: "background.paper",
};

export default function SideBar({ setCount, count }) {
  // const navigate = useNavigate();

  // const handleLogOut = () => {
  //   localStorage.setItem("isLogin", false);
  //   navigate("/", { replace: true });
  // };
  return (
    <List
      sx={style}
      className={classes.list}
      component="nav"
      aria-label="mailbox folders"
    >
      <ListItem
        className={
          count === 0
            ? `${classes.ListItem} ${classes.activeSidebar}`
            : `${classes.ListItem}`
        }
        button
        onClick={() => setCount(0)}
      >
        <CalendarMonth />
        <ListItemText primary="Calendar" />
      </ListItem>
      <Divider />
      <ListItem
        className={
          count === 1
            ? `${classes.ListItem} ${classes.activeSidebar}`
            : `${classes.ListItem}`
        }
        button
        divider
        onClick={() => setCount(1)}
      >
        <Person />

        <ListItemText primary="Employer" />
      </ListItem>
      <ListItem
        className={
          count === 2
            ? `${classes.ListItem} ${classes.activeSidebar}`
            : `${classes.ListItem}`
        }
        button
        onClick={() => setCount(2)}
      >
        <BusinessCenter />
        <ListItemText primary="Job" />
      </ListItem>
      <Divider />
      <ListItem
        className={
          count === 3
            ? `${classes.ListItem} ${classes.activeSidebar}`
            : `${classes.ListItem}`
        }
        button
        onClick={() => setCount(3)}
      >
        <ScreenSearchDesktop />
        <ListItemText primary="Job seeker" />
      </ListItem>
      <Divider light />
      <ListItem
        className={
          count === 4
            ? `${classes.ListItem} ${classes.activeSidebar}`
            : `${classes.ListItem}`
        }
        button
        onClick={() => setCount(4)}
      >
        <Mail />
        <ListItemText primary="messages" />
      </ListItem>
    </List>
  );
}
