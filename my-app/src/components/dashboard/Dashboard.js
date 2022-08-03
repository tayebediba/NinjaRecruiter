import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import classes from "./dashboard.module.css";
import { Avatar, Grid } from "@mui/material";

import SideBar from "./sideBar/sideBar";
import Calendar from "./calender/Calender";
import EmployerList from "./employerList/EmployerList";

const drawerWidth = 240;

export default function Dashboard(props) {
  const [count, setCount] = useState(0);
  const [renderComponent, setRenderComponent] = useState("");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    switch (count) {
      case 0:
        setRenderComponent(<Calendar />);
        break;
      case 1:
        setRenderComponent(<EmployerList />);
        break;
      case 2:
        setRenderComponent();
        break;
      case 3:
        setRenderComponent();
        break;
      case 4:
        setRenderComponent();
        break;
      default:
        setRenderComponent();
    }
  }, [count]);
  const drawer = (
    <div className={classes.drawerBox}>
      <div className={classes.avatar}>
        <Avatar />
        <p>amir vosouqhi</p>
      </div>
      {/* <Toolbar /> */}
      <Divider />
      {/* <List className={classes.list}>
        {SideBarList.map(({ name, icon }) => {
          return (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List> */}
      <SideBar setCount={setCount} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

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
      <div className={classes.rightHederNav}>
        <div className={classes.navHeaderDashboard}>{/* <Tab /> */}</div>

        {/* <Accordin /> */}
        {/* <FormInputs /> */}
      </div>
    </Box>
  );
}
