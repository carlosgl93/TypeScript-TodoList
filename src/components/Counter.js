import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(42);

  const handleCounterIncrement = (counter) => setCounter(counter + 1);
  return (
    <div>
      <h2 className="counter">{counter}</h2>
      <div>
        <button onClick={handleCounterIncrement} className="counter-button">
          Click
        </button>
      </div>
    </div>
  );
}

export default Counter;
