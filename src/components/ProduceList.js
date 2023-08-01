import React from 'react';
import PropTypes from 'prop-types';
import Produce from './Produce';
import { availableProduce } from '../data';
import './ProduceList.css';

function ProduceList(){
  return (
    <div className="produce-list">
      {availableProduce.map((produce, index) =>
        <Produce month={produce.month}
          selection={produce.selection}
          key={index}/>
      )}
    </div>
  );
}

ProduceList.propTypes = {
  availableProduce: PropTypes.array
};

export default ProduceList;
