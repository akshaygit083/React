import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import RestaurantMenu from "./components/RestaurantMenu";
import { visibility } from "../context/contextApi";
import { useState } from "react";
import { coordinates } from "../context/contextApi";

// import FoodDelivery from "./components/FoodDelivery";

function App() {

    const[visible, setVisible] = useState(false)
    const[coordinate, setCoordinate] = useState({lat: "28.5355161", lng: "77.3910265"})

  return (
    // <coordinates.provider value={{coordinate, setCoordinate}}>
    <visibility.Provider value={{visible, setVisible}}>
      <div className={visible ? " max-h-screen overflow-hidden" : " "}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Body />}></Route>
            <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </div>
    </visibility.Provider>
    // {/* <coordinates.provider/> */}

    // <div className="overflow-x-hidden">
    //   <Navbar/>
    //   <Body/>
    // </div>
  );
}

export default App;
