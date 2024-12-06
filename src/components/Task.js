import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  
  const [count, setCount] = useState(0);

 
  const increment = () => setCount(count + 1);

  
  const decrement = () => setCount(count - 1);

 
  const reset = () => setCount(0);

  return (
    <Fragment style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Count++</button>
      <button onClick={decrement}>Count--</button>
      <button onClick={reset}>Reset</button>
    </Fragment>
  );
}


ReactDOM.render(<Counter />, document.getElementById('root'));

export default Counter;