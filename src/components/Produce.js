// Produce.js
import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
