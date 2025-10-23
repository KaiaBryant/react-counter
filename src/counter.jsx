import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>

    </div>
  );
}
