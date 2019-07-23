import React from 'react';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component {
  render() {
    return (
      <div className="drum-machine">
        <h1>Drum Machine</h1>
        <div className="display" id="display">
          Display
        </div>
        <DrumPad />
      </div>
    );
  }
}

export default DrumMachine;
