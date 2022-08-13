import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormInputs from "./formInputs/FormInputs";
import EmployerList from "./employerList/EmployerList";
import { Grid } from "@mui/material";
import Accordin from "../acoordin/Accordin";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box xs={12}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    className: "active",
  };
}

export default function Employer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container style={{ width: "100%" }}>
      <Box>
        <Box
          sx={{ borderBottom: 3, borderColor: "divider" }}
          style={{
            width: "100%",
            margin: "auto",
          }}
          xs={10}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            textColor="inherit"
          >
            <Tab label="Fill out the form" {...a11yProps(0)} />
            <Tab label="Employers List" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Accordin />
          <FormInputs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployerList />
        </TabPanel>
      </Box>
    </Grid>
  );
}
