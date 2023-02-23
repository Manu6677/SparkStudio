import React from "react";
import JuniorBtn from "./JuniorBtn";
import SeniorBtn from "./SeniorBtn";
const ButtonList = () => {
  return (
    <div className="">
      <div className="flex justify-between mt-11 pl-11">
        <JuniorBtn />
        <SeniorBtn />
      </div>
    </div>
  );
};

export default ButtonList;
