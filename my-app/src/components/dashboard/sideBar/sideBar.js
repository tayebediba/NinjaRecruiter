import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import classes from "./sideBar.module.css";
import SideBarList from "./SideBarList";
import { Avatar } from "@mui/material";
import Accordin from "../acoordin/Accordin";
import Picker from "../acoordin/calenderBox";
import CustomDay from "../acoordin/calenderBox";
import PersianExample from "../acoordin/calenderBox";
import Calendar from "react-calendar";
import { useState } from "react";
import ShowCalendar from "../showcalendar/ShowCalendar";
import Tab from "./tab/Tab";
import FormInputs from "../../dashboard/formInputs/FormInputs";
import EmployerList from "../employerList/EmployerList";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.avatar}>
        <Avatar />
        <p>amir vosouqi</p>
      </div>
      {/* <Toolbar /> */}
      <Divider />
      <List className={classes.list}>
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
      </List>
      <Divider />
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

      {/* <div className={classes.rightHederNav}>
        <div className={classes.navHeaderDashboard}>
          <Tab />
        </div>
    
        <Accordin />
       
        <FormInputs />
      </div> */}
      <EmployerList/>
    </Box>
  );
}
