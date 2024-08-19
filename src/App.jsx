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

  return (
    <div>
      <h1>useRef vs useState</h1>
      <div>
        state영역 입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div>
        ref영역 입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
    </div>
  );
};

export default App;
