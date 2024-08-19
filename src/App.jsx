import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  // 의존성 배열 : 이 배열에 값을 넣으면 그 값이 바뀔 때만 useEffect를 실행할께
  useEffect(() => {
    console.log("Hello useEffect!");
  }, []);
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
    </div>
  );
};

export default App;
