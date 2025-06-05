
import FoodDelivery from "./FoodDelivery";
import TopRestaurant from "./TopRestaurant";
import WtOnMind from "./WtOnMind";


function Body() {
  

  return (
    <div className="flex justify-center items-center overflow-x-hidden">
      <div className="w-[76%] pt-4 overflow-hidden">
        <WtOnMind/>
        <TopRestaurant/>
        <FoodDelivery/>


      </div>
    </div>
  );
}

export default Body;
