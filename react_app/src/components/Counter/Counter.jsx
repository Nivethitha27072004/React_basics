import "./Counter.css"
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1); }
    const decrement = () => { setCount(count - 1) }
    const reset=()=>{ setCount(0)}

    
  return (
    <div className="container">
      
          <div className="count-container">
          <h3>
          <b>Counter:{count}</b>
          </h3>
          </div>
      <div className="btn-container">
        <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
        
         
    </div>
  )
}

export default Counter