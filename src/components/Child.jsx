/* eslint-disable react/prop-types */
const Child = ({ setCount }) => {
  return (
    <div>
      <h3>여기는 자식 컴포넌트 입니다.</h3>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가!
      </button>
    </div>
  );
};

export default Child;
