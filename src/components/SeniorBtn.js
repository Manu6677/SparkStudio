import React, { useState } from "react";
import Card1 from "./Card1";
const SeniorBtn = () => {
  const [key1, setKey1] = useState();
  const senior = () => {
    setKey1(1);
  };
  return (
    <div>
      <button
        className="bg-color1light font-semibold rounded-lg w-20"
        onClick={() => senior()}
      >
        senior
      </button>
      <Card1 sen={key1} />
    </div>
  );
};

export default SeniorBtn;
