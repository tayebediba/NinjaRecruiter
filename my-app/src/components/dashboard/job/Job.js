import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Accordin from "../acoordin/Accordin";
import JobDefinition from "./jobDefinition/JobDefinition";
import HiredPeople from "./hiredPeople/HiredPeople";
import JobList from "./jobList/JobList";
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
        <Box>
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
  };
}

export default function Job() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container style={{ width: "65rem" }}>
      <Box style={{ width: "100%", margin: "0" }}>
        <Box sx={{ borderBottom: 3, borderColor: "divider" }} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
          >
            <Tab label="Fill out the form" {...a11yProps(0)} />
            <Tab label="Job List" {...a11yProps(1)} />
            <Tab label="Hired people" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Accordin />
          <JobDefinition />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JobList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HiredPeople />
        </TabPanel>
      </Box>
    </Grid>
  );
}
