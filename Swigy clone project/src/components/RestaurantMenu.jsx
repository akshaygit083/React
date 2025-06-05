import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { foodMenu } from "./FoodData";
import { foodData } from "./FoodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { faAngleUp} from "@fortawesome/free-solid-svg-icons";

function RestaurantMenu() {
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

  const { id } = useParams();
  //   console.log(id);

  const [menuData, setMenuData] = useState([]);
  const [resData, setresData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const[currentIndx, setCurrentIndx] = useState(0)
  // console.log(resData);

  useEffect(() => {
    setresData(foodMenu[0]?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      foodMenu[0]?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.offers
    );
  });

  let actualMenu = Object.values(
    foodMenu[0]?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      {}
  ).filter((data) => data?.card?.card?.itemCards);

  useEffect(() => {
    setMenuData(actualMenu);
  }, []);

  //   useEffect(() => {
  //     const link = foodData[0]?.data?.cards[0]?.card?.card
  //     console.log(link)
  //   });

  function toggleFul(i){
    setCurrentIndx(i === currentIndx ? null : i)
  }

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto overflow-hidden">
        <p className="text-xs py-8 ">
          <Link to={"/"}>
            <span className="hover:font-medium cursor-pointer">Home</span>
          </Link>{" "}
          /{" "}
          <Link to={"/"}>
            <span className="hover:font-medium cursor-pointer">
              {resData.city}
            </span>
          </Link>{" "}
          / <span className="font-medium ">{resData.name}</span>{" "}
        </p>
        <h1 className="text-3xl font-bold pl-4">{resData.name}</h1>

        <div className=" flex justify-center items-center w-full h-[210px] bg-gradient-to-t from-slate-200 rounded-[2.5rem] my-4">
          <div className="w-[47rem] h-[160px] rounded-3xl p-4 border bg-white">
            <div className="font-bold text-base">
              <FontAwesomeIcon icon={faStar} className="" />
              <span>{resData.avgRating}</span>
              <span>({resData.totalRatingsString})</span>
              <span>- {resData.costForTwoMessage}</span>
            </div>
            <p className="text-sm font-bold text-[rgb(255,103,57)] cursor-pointer py-2 underline">
              {/* {resData.cuisines.join(" , ")} */}
            </p>

            <div className="relative">
              <div className="w-2 h-2 rounded-full mt-2 bg-slate-400 "></div>
              <div className="w-[1px] h-8  ml-[3px] bg-slate-400 "></div>
              <div className="w-2 h-2 rounded-full bg-slate-400 "></div>
            </div>
            <div className=" flex justify-center items-center absolute top-[40.5%] left-[27%]">
              <p className="text-sm font-bold">Outlet</p>
              <span className="ml-3 ">{resData.locality}</span>
            </div>
            <div className="absolute top-[46%] left-[27%]">
              <p className="text-sm font-bold">{resData?.sla?.slaString}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-xl my-4">Deals for you</p>
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
          {discountData.map((data) => discount((data = { data })))}
        </div>

        <div className="text-center font-semibold my-8 tracking-widest text-sm text-gray-500">
          <p>MENU</p>
        </div>
        <div className=" flex justify-center items-center gap-4 w-full bg-gray-100 text-gray-600 cursor-pointer  p-4 text-base font-semibold rounded-3xl">
          <p>Search for dishes</p>
          <span className="text-right">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        <div>
          {menuData.map(
            ({
              card: {
                card: { itemCards, title },
              },
            }, i) => (
              <div>
                <div className="flex justify-between mt-4">
                  <h1 className="font-bold text-base ">{title}({itemCards.length})</h1>
                  <FontAwesomeIcon icon={faAngleUp} onClick={()=>toggleFul(i)} />
                </div>
                <hr className="my-5 border-8"/>
                {
                  currentIndx === i &&
                  <div className="p-8 ">
                  {
                    itemCards.map(({card:{info}})=>(
                      <h1 className="shadow-xl p-4 font-semibold">{info.name}</h1>
                    ))
                  }
                </div>
                }
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function discount({
  data: {
    info: { header, offerLogo, couponCode },
  },
}) {
  // console.log("data = ", info)
  return (
    <div className="flex min-w-[40%] items-center border border-gray-300 px-6 py-3 gap-4 rounded-3xl">
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60,h_60/" +
            offerLogo
          }
          alt=""
        />
      </div>

      <div>
        <h2 className="text-base font-bold">{header}</h2>
        <p className="text-sm font-bold text-gray-400">{couponCode}</p>
      </div>
    </div>
  );
}

export default RestaurantMenu;
