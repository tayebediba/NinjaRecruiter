import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-box">
      <button className={`button ${props.btnType}`} onClick={props.click}>
        {props.children}
      </button>
    </div>
  );
};
export default Button;
