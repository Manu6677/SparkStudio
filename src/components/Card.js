import React, { useState } from "react";
import Data from "./Data.json";

const Card = ({ jun }) => {
  console.log(jun);
  const [data] = useState(Data);

  // console.log(data);
  //   console.log(Object.values(data));

  return (
    <div
      className={`m-52 flex-col flex-wrap w-80 shadow-2xl cursor-pointer  ${
        jun === 0
          ? "scale-110 duration-300 m-52 flex-col flex-wrap w-1/4 shadow-2xl cursor-pointer"
          : ""
      }`}
    >
      <div className="p-2">
        <div className="bg-color1dark">
          <div className="">
            <div className="flex justify-between p-6">
              <div className="bg-color1light w-28 flex justify-center items-center rounded-xl text-colorwhite">
                {data[0]?.[0]?.num_classes} Sessions
              </div>
              <div className="bg-color1light px-9 rounded-full ml-16 h-12 w-20 flex justify-center ">
                20% off
              </div>
            </div>

            <div className="text-3xl font-bold text-color1light">
              {data[0]?.[0]?.display_name}
            </div>
            <div className="text-darkgray pb-3 font-bold ">
              ⭐⭐⭐⭐{data[0]?.[0]?.rating}
              <span className="text-darkgray">(50 views)</span>
            </div>
          </div>
        </div>

        {/* //pitch */}

        <div>
          <div className="p-7">{data[0]?.[0]?.pitch}</div>

          <p className="text-xl font-bold pl-3">Student will achieve:</p>
          <div className="p-3">{data[0]?.[0]?.curriculum_outcomes}</div>
        </div>

        {/* detail lesson plan */}
        <div className="pl-4 p-4 underline">View Detailed lesson plan</div>

        <div className="flex justify-around text-xl font-semibold">
          RS {data[0]?.[0]?.discounted_price}
          <span>
            Rs{" "}
            {Math.ceil(
              data[0]?.[0]?.discounted_price / data[0]?.[0]?.num_classes
            )}{" "}
            Per class{" "}
          </span>
        </div>
        <div className="pl-9 text-gray font-semibold text-lg line-through">
          Rs {data[0]?.[0]?.original_price}
        </div>
        <p className="py-3 text-red pl-5">
          We will schedule slots as per your convenience
        </p>

        {/* activit game certi */}
        <div className="flex justify-center items-center space-x-11 py-4 bg-color1dark h-5">
          <div> 8 Activities</div>
          <div>{data[0]?.[0]?.games_count} Games</div>
          <div>{data[0]?.[0]?.certificate_count} Certificate</div>
        </div>

        {/* btn */}

        <div className="w-40 h-5 ml-20 mt-3 pl-10 font-bold text-colorwhite flex items-center p-8 bg-btncolor  rounded-3xl">
          <button>Buy Course</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
