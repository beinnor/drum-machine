import React from 'react';
import './Controls.css';

export default function Controls(props) {
  return (
    <div className="controls">
      <div className="nextBankBtn" onClick={props.nextBank}>
        BANK
      </div>
      <div>
        <input
          type="text"
          className="currentBankDisplay"
          value={props.currentBank[0]}
          disabled
        />
      </div>
    </div>
  );
}
