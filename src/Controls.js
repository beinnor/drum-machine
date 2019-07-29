import React from 'react';
import { bankOne, bankTwo } from './utils/drumBanks';
import './Controls.css';

export default function Controls(props) {
  return (
    <div className="controls">
      <div>
        <input
          type="radio"
          id="drumBankOneSelect"
          name="drumBankTwoSelect"
          value="Drumbank #1"
          checked={props.currentBank === bankOne}
          onClick={props.changeBank}
        />
        <label for="drumBankOneSelect">Drumbank #1</label>

        <input
          type="radio"
          id="drumBankTwoSelect"
          name="drumBankTwoSelect"
          value="Drumbank #2"
          checked={props.currentBank === bankTwo}
          onClick={props.changeBank}
        />
        <label for="drumBankTwoSelect">Drumbank #2</label>
      </div>
    </div>
  );
}
