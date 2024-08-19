import { useRef } from "react";

const App = () => {
  // useRef로 선언한 값은 컴포넌트가 렌더링이 되어도 값을 유지한다!
  const ref = useRef("초기 값");
  console.log("ref", ref);

  ref.current = "바꾼 값";
  console.log("current => ", ref);

  return (
    <div>
      <h1>useRef</h1>
    </div>
  );
};

export default App;
