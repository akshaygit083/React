import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function RestaurantCard(restaurant) {
  // console.log(restaurant)
  return (
    <Link to={`/restaurantMenu/${restaurant.info.id}`}>
      <div className="min-w-72 h-48 relative">
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
        <p className="text-xl font-bold leading-none">{restaurant.info.name}</p>
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
    </Link>
  );
}

export default RestaurantCard;
