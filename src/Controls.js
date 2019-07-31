import React from 'react';
import { bankOne, bankTwo } from './utils/drumBanks';
import './Controls.css';

export default function Controls(props) {
  const selectBank1 = () => {
    props.changeBank(1);
  };
  const selectBank2 = () => {
    props.changeBank(2);
  };

  return (
    <div className="controls">
      <div>
        <input
          type="radio"
          id="drumBankOneSelect"
          name="drumBankTwoSelect"
          value="Drumbank #1"
          checked={props.currentBank === bankOne}
          onChange={selectBank1}
        />
        <label htmlFor="drumBankOneSelect">Drumbank #1</label>

        <input
          type="radio"
          id="drumBankTwoSelect"
          name="drumBankTwoSelect"
          value="Drumbank #2"
          checked={props.currentBank === bankTwo}
          onChange={selectBank2}
        />
        <label htmlFor="drumBankTwoSelect">Drumbank #2</label>
      </div>
    </div>
  );
}
