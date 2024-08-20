const Child = ({ houseName, pocketMoney }) => {
  const stressWord = {
    color: "red",
    fontWeight: "900",
  };

  return (
    <div>
      나는 이 집안의 막내에요.
      <br />
      할아버지가 우리 집 이름은 <span style={stressWord}>{houseName}</span>라고
      하셨어요.
      <br />
      게다가 용돈도 <span style={stressWord}>{pocketMoney}</span>원 만큼이나
      주셨답니다.
    </div>
  );
};

export default Child;
