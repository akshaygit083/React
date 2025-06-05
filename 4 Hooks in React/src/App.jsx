import { useState } from "react";

// example of UseState hook....................................................

function App() {
  let [data, setData] = useState(0);

  function increaseVal() {
    setData(data+1);
  }

  function decreaseVal() {
    setData(data-1);
  }

  return (
    <div>
      <h1>This is an example of UseState</h1>
      <button onClick={increaseVal}>Increase</button>
      <h2>{data}</h2>
      <button onClick={decreaseVal}>Decrease</button>
      <hr />
    </div>
  );
}

export default App;

// useRef hook Function ............................................................

import React, { useRef } from 'react';

export function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Directly focuses the input element
    console.log(inputRef)
  };

  return (
    <div>
      <h1>This is a example of UseRef</h1>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
      <hr />
    </div>
  );
}