import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className="display" id="display">
      {props.text}
    </div>
  );
};

export default Display;
