import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import SideBar from "./sideBar/sideBar";
import Calendar from "./calender/Calender";
import Employer from "./employer/Employer";
import Job from "./job/Job";
import LogoutIcon from "@mui/icons-material/Logout";
import Messages from "./messages/Messages";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./dashboard.module.css";

import JobSeeker from "./jobSeeker/JobSeeker";
import { useNavigate } from "react-router";

const drawerWidth = 240;

export default function Dashboard(props) {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [renderComponent, setRenderComponent] = useState("");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    switch (count) {
      case 0:
        setRenderComponent(<Calendar />);
        break;
      case 1:
        setRenderComponent(<Employer />);
        break;
      case 2:
        setRenderComponent(<Job />);
        break;
      case 3:
        setRenderComponent(<JobSeeker />);
        break;
      case 4:
        setRenderComponent(<Messages />);
        break;
      default:
        setRenderComponent(<Calendar />);
    }
  }, [count]);
  const drawer = (
    <div className={classes.drawerBox}>
      <div className={classes.avatar}>
        <Avatar />
        <p>User Name</p>
      </div>

      <Divider />

      <SideBar setCount={setCount} count={count} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar className={classes.navBarApp} component="nav">
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <div className={classes.logo}>
            <img className={classes.logo} src={logo} alt="logo" />
          </div> */}
          <Box
            className={classes.box}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <div className={classes.drawerBox}>
              <div className={classes.avatar}>
                <Avatar />
                <p>User Name</p>
              </div>

              <Divider />

              <SideBar setCount={setCount} count={count} />
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Grid
        item
        xs={10}
        style={{ justifyContent: "center", margin: "1rem auto" }}
      >
        {renderComponent}
      </Grid>
    </Box>
  );
}
