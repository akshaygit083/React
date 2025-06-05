import { useEffect, useState } from "react";
import { foodData } from "./FoodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FoodDelivery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res =
      foodData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setData(res);
  }, []);
  return (
    <Link to={"/restaurentMenu"}>
        <p className="font-bold text-xl py-8">
          Restaurants with online food delivery in Dharamshala
        </p>

      <div className={`grid grid-cols-4 gap-4 duration-500`}>
        {data.map((restaurant, i) => (
          <div key={i} className="hover:scale-95 duration-300">
            <div className="min-w-60 h-44 relative">
              <img
                key={restaurant.id}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant?.info?.cloudinaryImageId}`}
                alt={restaurant.accessibility?.altText || "restaurant"}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="bg-gradient-to-t from-black from-1% to-transparent to-40%  rounded-xl w-full h-full  absolute top-0"></div>
              <p className="absolute bottom-1 text-white font-bold text-xl pl-4">
                {restaurant.info.aggregatedDiscountInfoV3?.header +
                  " " +
                  restaurant.info.aggregatedDiscountInfoV3?.subHeader}{" "}
              </p>
            </div>
            <div className="mt-4 pl-3">
              <p className="text-xl font-bold leading-none">
                {restaurant.info.name}
              </p>
              <p className="text-md font-medium">
                <FontAwesomeIcon icon={faStar} className="" />{" "}
                {restaurant?.info?.avgRating}/{" "}
                <span>{restaurant?.info?.sla?.slaString}</span>
              </p>
              <p className="text-md line-clamp-1">
                {restaurant?.info?.cuisines.map((d) => d + ",")}
              </p>
              <p className="leading-none">{restaurant?.info?.locality}</p>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default FoodDelivery;
