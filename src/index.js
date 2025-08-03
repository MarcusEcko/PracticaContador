import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  const handleClick = () => (
    setValue(prev => prev + 1)
  )

  return (
    <div>
      <span>{value}</span><br/>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
);

