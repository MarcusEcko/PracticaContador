import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  const changeValue = (amount) => {
    setValue(prev => {
      if(amount === 0) return 0;
      const newValue = prev + amount;
      return newValue < 0 ? 0 : newValue;
    });
  }

  return (
    <div>
      <span>{value}</span><br/>
      <button onClick={() => changeValue(-1)}>Decrementar - 1</button>
      <button onClick={() => changeValue(-10)}> -10 </button>
      <button onClick={() => changeValue(-5)}> -5 </button>
      <button onClick={() => changeValue(0)}> 0 </button>
      <button onClick={() => changeValue(5)}> +5 </button>
      <button onClick={() => changeValue(10)}> +10 </button>
      <button onClick={() => changeValue(1)}>Incrementar + 1</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
);

