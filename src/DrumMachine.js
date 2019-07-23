import React from 'react';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component {
  render() {
    return (
      <div className="DrumMachine" id="drum-pad">
        <h1>Drum Machine</h1>
        <div id="display">Display</div>
        <DrumPad />
      </div>
    );
  }
}

export default DrumMachine;
