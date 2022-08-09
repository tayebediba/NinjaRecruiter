import { Avatar, Button, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import Accordin from "../acoordin/Accordin";
import classes from "./messages.module.css";
const Messages = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container flexDirection="column" style={{ width: "100%" }}>
      <Grid item xs={12} className={classes.header}>
        <h1>Messages</h1>
        <Button onClick={handleOpen}>Send Messages</Button>
      </Grid>
      <Accordin />
      <Grid item xs={12} className={classes.MessageBox}>
        <Grid item xs={12} md={12}>
          {[1, 2, 3, 4].map((i) => {
            return (
              <div key={i} className={classes.cardMessage}>
                <Avatar alt="Remy Sharp" />
                <div style={{ textAlign: "left", paddingRight: "1rem" }}>
                  <h2>title</h2>
                  <p>text</p>
                </div>
                <h2 style={{ padding: "1rem" }}>date</h2>
              </div>
            );
          })}
        </Grid>
      </Grid>
      <div className={classes.Pagination}>
        <Pagination count={10} className={classes.colorPagination} />
      </div>
    </Grid>
  );
};
export default Messages;
