import React from 'react';

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress);
  }

  handleKeypress(e) {
    console.log('pressed a key');
    alert(`Pressed key ${e.keyCode}`);
  }

  playSound = () => {
    alert('playing sound');
  };

  render() {
    return (
      <div className="drum-pad" id="a" onClick={this.playSound}>
        <h1>DrumPad</h1>
      </div>
    );
  }
}

export default DrumPad;
