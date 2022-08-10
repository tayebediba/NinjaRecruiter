import { Avatar, Button, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import Accordin from "../acoordin/Accordin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./messages.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
const Messages = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container flexDirection="column" style={{ width: "100%" }}>
      <Grid item xs={12} className={classes.header}>
        <h1>Messages</h1>
        <Button style={{ color: "#FFBA1A" }} onClick={handleOpen}>
          Send Messages
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>What platform are you going to send the message from?</h3>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Email
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Linkedin
            </Typography>
          </Box>
        </Modal>
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
