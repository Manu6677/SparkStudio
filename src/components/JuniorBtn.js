import React, { useEffect, useState } from "react";

const JuniorBtn = () => {
  const [key, setKey] = useState(1);
  console.log(key);

  const junior = () => {
    setKey(0);
  };
  console.log(key);
  return (
    <div>
      <button
        className="bg-color1light font-semibold rounded-lg w-20"
        onClick={() => junior()}
        jun={key}
      >
        Junior
      </button>
    </div>
  );
};

export default JuniorBtn;
