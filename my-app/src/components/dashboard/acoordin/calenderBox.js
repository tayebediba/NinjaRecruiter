import React, { useState } from "react";
import Calendar from "react-calendar";
import classes from "./accordin.module.css";

const CalenderBox = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={classes.content}
      />
    </div>
  );
};

export default CalenderBox;
