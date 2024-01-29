import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };


  const Reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
  
            <button className='button' onClick={decrement}>Decrease</button>
            <button className='button' onClick={Reset}>Reset</button>
            <button className='button' onClick={increment}>increase</button>

    
    </div>
  );
}

export default Counter;