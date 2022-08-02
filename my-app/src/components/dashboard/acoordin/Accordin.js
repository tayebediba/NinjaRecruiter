import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./accordin.module.css";
import CalenderBox from "./calenderBox";

const Accordin = () => {
  return (
    <div className={classes.Accordin}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "silver", borderRadius: "5px" }}
        >
          <Typography style={{ color: "#595959", fontFamily: "Inter-Regular" }}>
            Calendar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CalenderBox />
        </AccordionDetails>
      </Accordion>
      <Typography
        style={{
          color: "#222831",
          fontSize: "2rem",
          fontFamily: "Inter-Medium",
          textAlign: "center ",
          marginTop: "2rem",
        }}
      ></Typography>
    </div>
  );
};
export default Accordin;
