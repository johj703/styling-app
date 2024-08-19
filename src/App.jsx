import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Hello useEffect!");
  });
  return (
    <div>
      <h1>useEffect</h1>
    </div>
  );
};

export default App;
