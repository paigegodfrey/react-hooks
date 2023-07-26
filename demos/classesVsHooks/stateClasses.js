import React, { Component } from 'react';

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonClicked: false 
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      buttonClicked: !prevState.buttonClicked,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {buttonClicked ? 'Clicked' : 'Click me!'}
      </button>
    );
  }
}

export default Example1;
