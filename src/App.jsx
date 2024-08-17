import { useState } from "react"

const App = () => {
  const[count, setCount] = useState(0);
  const handleCountPlus = () => {
    setCount((현재값) => {
      return 현재값 + 1;
    });
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleCountPlus}>증가</button>
    </div>
  )
}

export default App
