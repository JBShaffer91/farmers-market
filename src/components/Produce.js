import React from 'react';
import PropTypes from 'prop-types';
import './Produce.css';

function Produce(props){
  return (
    <div className="produce">
      <h3 className="produce-month">{props.month}</h3>
      <ul className="produce-selection">
        {props.selection.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
