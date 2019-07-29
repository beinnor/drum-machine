import React from 'react';
import DrumPad from './DrumPad';
import Controls from './Controls';
import Display from './Display';
import { bankOne, bankTwo } from './utils/drumBanks';
import './DrumMachine.css';

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
        <Display text={this.state.display} />
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
