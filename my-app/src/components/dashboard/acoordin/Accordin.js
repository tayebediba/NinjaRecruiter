import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./accordin.module.css";
// import ShowCalendar from "../showcalendar/ShowCalendar";
const Accordin = () => {
  return (
    <div className={classes.Accordin}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: "#595959", fontFamily: "Inter-Regular" }}>
            Calendar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <ShowCalendar /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Accordin;
