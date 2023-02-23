import React, { useState } from "react";
import Card from "./Card";

const JuniorBtn = () => {
  const [key, setKey] = useState("");
  console.log(key);

  const junior = () => {
    setKey(0);
  };

  return (
    <div>
      <button
        className="bg-color1light font-semibold rounded-lg w-20"
        onClick={() => junior()}
      >
        Junior
      </button>
      <Card jun={key} />
    </div>
  );
};

export default JuniorBtn;
