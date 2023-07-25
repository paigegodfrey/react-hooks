import React from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      buttonClicked: false 
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      btnClicked: !prevState.btnClicked,
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

export default App;
