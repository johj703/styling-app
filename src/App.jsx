import { useState } from "react"

const App = () => {
  const[count, setCount] = useState(0);

  return (
    <div>
      {count}
      <br />
      <button onClick={() => {
        setCount(count + 1);
      }}>증가</button>
    </div>
  )
}

export default App
