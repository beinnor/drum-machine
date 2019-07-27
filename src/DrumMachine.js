import React from 'react';
import DrumPad from './DrumPad';
import Controls from './Controls';
import { bankOne, bankTwo } from './utils/drumBanks';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currentBank: bankOne
    };
  }

  updateDisplay = text => {
    this.setState({ display: text });
  };

  selectDrumBank = bank => {
    if (this.state.currentBank === bankOne) {
      this.setState({ currentBank: bankTwo });
    } else {
      this.setState({ currentBank: bankOne });
    }
  };

  render() {
    const pads = this.state.currentBank.map(bank => {
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
        <div className="drum-pads">{pads}</div>
        <Controls
          currentBank={this.state.currentBank}
          changeBank={this.selectDrumBank}
        />
      </div>
    );
  }
}

export default DrumMachine;
