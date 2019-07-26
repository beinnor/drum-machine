import React from 'react';
import DrumPad from './DrumPad';
import { bankTwo as drumBank } from './utils/drumBanks';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currentBank: drumBank
    };
  }

  updateDisplay = text => {
    this.setState({ display: text });
  };

  render() {
    const padBank = this.state.currentBank.map(bank => {
      return (
        <DrumPad key={bank.id} data={bank} updateDisplay={this.updateDisplay} />
      );
    });

    return (
      <div className="drum-machine" id="drum-machine">
        <h1>Drum Machine</h1>
        <div className="display" id="display">
          {this.state.display}
        </div>
        <div className="drum-pads">{padBank}</div>
      </div>
    );
  }
}

export default DrumMachine;
