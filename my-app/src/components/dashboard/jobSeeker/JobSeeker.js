import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Accordin from "../acoordin/Accordin";
import EducationalBackground from "./EducationalBackground/EducationalBackground";
import WorkExperience from "./workExperience/WorkExperience";
import PersonalInformation from "./personalInformation/PersonalInformation";
import JobSeekerList from "./jobSeekerList/JobSeekerList";
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

export default function JobSeeker() {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [renderPage, setRenderPage] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    switch (page) {
      case 0:
        setRenderPage(<PersonalInformation setPage={setPage} />);
        break;
      case 1:
        setRenderPage(<EducationalBackground setPage={setPage} />);
        break;
      case 2:
        setRenderPage(<WorkExperience setPage={setPage} />);
        break;
      default:
        setRenderPage(<PersonalInformation setPage={setPage} />);
    }
  }, [page]);

  return (
    <Grid container style={{ width: "65rem" }}>
      <Box style={{ width: "100%", margin: "auto" }}>
        <Box sx={{ borderBottom: 3, borderColor: "divider" }} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
          >
            <Tab label="Fill out the form" {...a11yProps(0)} />
            <Tab label="Job seeker List" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Accordin />
          {renderPage}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <JobSeekerList />
        </TabPanel>
      </Box>
    </Grid>
  );
}
