import React from 'react';
import DrumPad from './DrumPad';
import Controls from './Controls';
import Display from './Display';
import Header from './Header';
import { bankOne, bankTwo } from './utils/drumBanks';
import './DrumMachine.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currentBank: bankOne,
      availableBanks: [bankOne, bankTwo]
    };
  }

  updateDisplay = text => {
    this.setState({ display: text });
  };

  selectDrumBank = bankNum => {
    switch (bankNum) {
      case 1:
        this.setState({ currentBank: bankOne });
        break;
      case 2:
        this.setState({ currentBank: bankTwo });
        break;
      default:
        break;
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
        <Header />
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
