import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padClassName: 'drum-pad'
    };
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

  lightUpPad = () => {
    if (this.state.padClassName === 'drum-pad') {
      this.setState({ padClassName: 'drum-pad active' });
    } else {
      this.setState({ padClassName: 'drum-pad' });
    }
  };

  playSound = () => {
    this.lightUpPad();
    setTimeout(() => this.lightUpPad(), 100);
    this.props.updateDisplay(this.props.data.id);
    this.audio.play();
    this.audio.currentTime = 0;
  };

  render() {
    return (
      <div
        className={this.state.padClassName}
        id={this.props.data.id}
        onClick={this.playSound}
      >
        {this.props.data.keyTrigger}
        <audio
          className="clip"
          id={this.props.data.keyTrigger}
          preload="auto"
          ref={ref => (this.audio = ref)}
          src={this.props.data.url}
          type="audio/mpeg"
        />
      </div>
    );
  }
}

export default DrumPad;
