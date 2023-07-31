// ProduceList.js
import React from 'react';
import PropTypes from 'prop-types';
import Produce from './Produce';
import { availableProduce } from '../data';

function ProduceList(){
  return (
    <React.Fragment>
      <hr/>
      {availableProduce.map((produce, index) =>
        <Produce month={produce.month}
          selection={produce.selection}
          key={index}/>
      )}
    </React.Fragment>
  );
}

ProduceList.propTypes = {
  availableProduce: PropTypes.array
};

export default ProduceList;
