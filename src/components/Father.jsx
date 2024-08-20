import Child from "./Child";

const Father = ({ houseName, pocketMoney }) => {
  return <Child houseName={houseName} pocketMoney={pocketMoney} />;
};

export default Father;
