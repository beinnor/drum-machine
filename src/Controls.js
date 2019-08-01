import React from 'react';
import './Controls.css';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClassName: 'nextBankBtn'
    };
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.lightUpPad = this.lightUpPad.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress);
  }

  handleKeypress(e) {
    if (e.keyCode === 66) {
      this.props.nextBank();
      this.lightUpPad();
      setTimeout(() => this.lightUpPad(), 100);
    }
  }

  handleClick() {
    this.lightUpPad();
    setTimeout(() => this.lightUpPad(), 100);
    this.props.nextBank();
  }

  lightUpPad = () => {
    if (this.state.btnClassName === 'nextBankBtn') {
      this.setState({ btnClassName: 'nextBankBtn active' });
    } else {
      this.setState({ btnClassName: 'nextBankBtn' });
    }
  };

  render() {
    return (
      <div className="controls">
        <div className={this.state.btnClassName} onClick={this.handleClick}>
          BANK
        </div>
        <div>
          <input
            type="text"
            className="currentBankDisplay"
            value={this.props.currentBank[0]}
            disabled
          />
        </div>
      </div>
    );
  }
}
