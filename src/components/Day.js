import React from "react";
import PropTypes from "prop-types";
import "./Day.css";

function Day(props){
  return (
    <div className="day">
      <h3>{props.day}</h3>
      <p className="day-info"><em>{props.location}</em></p>
      <p className="day-info"><em>{props.hours}</em></p>
      <p className="day-info"><em>{props.booth}</em></p>
      <hr/>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;
