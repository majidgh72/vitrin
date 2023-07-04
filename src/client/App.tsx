import { useState } from "preact/hooks";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div id="app">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
    </div>
  );
};
