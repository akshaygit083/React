import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { foodData } from "./FoodData";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ResturantCard from "./ResturantCard";

function TopRestaurant() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const res =
      foodData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setData(res);
  }, []);

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 53); // ✅ Moves left
  }
  function handleNext() {
    val >= 371 ? "" : setVal((prev) => prev + 53); // ✅ Moves right
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl py-8">
          Top restaurant chains in Dharamshala
        </p>
        <div className="flex gap-4">
          <div
            onClick={handlePrev}
            className={
              `rounded-[50%] py-1 px-2 cursor-pointer ` +
              (val <= 0 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div
            onClick={handleNext}
            className={
              `bg-gray-200 rounded-[50%] py-1 px-2 cursor-pointer ` +
              (val <= 0 ? "text-gray-300" : "text-gray-800")
            }
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div
        className={`flex gap-4 duration-500`}
        style={{ translate: `-${val}%` }}
      >
        {data.map((restaurant, i) => (
          <div key={i} className="hover:scale-95 duration-300">
            <ResturantCard {...restaurant} />
          </div>
        ))}
      </div>
      <hr className="mt-12" />
    </div>
  );
}

export default TopRestaurant;
