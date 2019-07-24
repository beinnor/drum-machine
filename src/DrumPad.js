import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress);
  }

  handleKeypress(e) {
    if (e.keyCode === this.props.data.keyCode) {
      this.playSound();
    }
  }

  playSound = () => {
    console.log(`Playing sound: ${this.props.data.url}`);
    document.getElementById('clip').play();
  };

  render() {
    return (
      <div className="drum-pad" id="a" onClick={this.playSound}>
        <h1>{this.props.data.keyTrigger}</h1>
        <p>{this.props.data.id}</p>
        <audio className="clip" id="clip" preload="auto" ref={this.playSound}>
          <source src={this.props.data.url} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default DrumPad;
