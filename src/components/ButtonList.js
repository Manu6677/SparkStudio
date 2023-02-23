import React from "react";
import JuniorBtn from "./JuniorBtn";
import SeniorBtn from "./SeniorBtn";
const ButtonList = () => {
  return (
    <div className="">
      <div className="flex justify-between space-x-1 mt-40 ml-36">
        <JuniorBtn />
        <SeniorBtn />
      </div>
    </div>
  );
};

export default ButtonList;
