import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext.js";

const GrandFather = () => {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <FamilyContext
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father houseName={houseName} pocketMoney={pocketMoney} />
    </FamilyContext>
  );
};

export default GrandFather;
