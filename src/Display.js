import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div>
      <input
        type="text"
        className="display"
        id="display"
        value={props.text}
        disabled
      />
    </div>
  );
};

export default Display;
