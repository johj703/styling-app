import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  // 의존성 배열 : 이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할께
  useEffect(() => {
    console.log("Hello useEffect!");
  }, [count]);
  return (
    <div>
      <h1>useEffect</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
};

export default App;
