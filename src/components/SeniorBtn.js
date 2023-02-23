import React, { useState } from "react";

const SeniorBtn = () => {
  const [key1, setKey1] = useState("");
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
    </div>
  );
};

export default SeniorBtn;
