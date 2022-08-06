import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./accordin.module.css";
import CalenderCard from "./calenderCard";

const Accordin = () => {
  return (
    <div>
      <Accordion className={classes.Accordin}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
        >
          <Typography style={{ color: "#595959", fontFamily: "Inter-Regular" }}>
            Calendar
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ margin: "0" }}>
          <CalenderCard />
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
