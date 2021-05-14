import React, { useState, useEffect } from 'react'

function EffectHook() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div className="App">
      <h1>EFFECT-HOOK-SIMPLE-USE</h1>
      <p>You clicked + {count} times</p>
        <button type="primary" onClick={() => setCount(count + 1)}>
          Click me + 
        </button>
      <p>You clicked - {count} times</p>
        <button type="primary" onClick={() => setCount(count - 1)}>
          Click me -
        </button>
      <h2>Total Count: {count}</h2>
    </div>
  );
}

export default EffectHook;
