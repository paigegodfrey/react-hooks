import { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const increment = () => {
    setCount(prevState => prevState + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
}

export default Example2;
