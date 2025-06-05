import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { foodData } from "./FoodData";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function WtOnMind() {
  const [data, setData] = useState([]);

  const [val, setVal] = useState(0);

  useEffect(() => {
    const res =
      foodData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
    setData(res);
  }, []);

  // console.log(val);

  function handlePrev() {
    val <= 0 ? "" : setVal((prev) => prev - 52); // ✅ Moves left
  }
  function handleNext() {
    val >= 208 ? "" : setVal((prev) => prev + 52); // ✅ Moves right
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl my-4">What's on your mind?</p>
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
        className="flex gap-4 duration-500 transition-transform"
        style={{ transform: `translateX(-${val}%)` }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
            alt={item.accessibility?.altText || "food item"}
            className="w-48 h-48 object-cover cursor-pointer rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        ))}
      </div>
      <hr className="mt-12" />
    </div>
  );
}

export default WtOnMind;
