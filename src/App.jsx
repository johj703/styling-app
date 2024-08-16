import "./App.css";
import styled from "styled-components";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const StP = styled.p`
  color: blue;
`;

function App() {
  return (
    <>
      <StBox>
        <StP>스타일이 적용된 p 태그</StP>
      </StBox>
    </>
  );
}

export default App;
