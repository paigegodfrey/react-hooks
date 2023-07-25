import { useState } from 'react';

const App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(current => !current);
  }

  return (
    <button onClick={handleClick}>
      {buttonClicked ? 'Clicked' : 'Click me!'}
    </button>
  );
}

export default App;
