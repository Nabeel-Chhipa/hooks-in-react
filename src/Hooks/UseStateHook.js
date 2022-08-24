import React from 'react'
import { useState } from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(' ')
  
    function decrementCount() {
      setCount(precount => precount - 1)
      setMessage('Decrement')
    }
    
    function incrementCount() {
      setCount(precount => precount + 1)
      setMessage('Increment')
    }
  
    return (
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{message}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    );
}

export default UseStateHook