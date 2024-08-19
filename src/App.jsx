import { useRef, useEffect } from "react";

const App = () => {
  const idRef = useRef("");

  useEffect(() => {
    idRef.current.focus();
  });

  return (
    <div>
      <div>
        아이디: <input type="text" ref={idRef} />
      </div>
      <div>
        비밀번호: <input type="password" />
      </div>
    </div>
  );
};

export default App;
