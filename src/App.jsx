import { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
  };
  const plusRefCountButtonHandler = () => {
    countRef.current++;
  };

  return <div>App</div>;
};

export default App;
