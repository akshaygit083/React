import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { visibility } from "../../context/contextApi";






function Navbar() {

const navItems = [
  {
    fullName: "Swigy Corporate",
    icon: <FontAwesomeIcon icon={faBagShopping} />,
  },
  {
    fullName: "Search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  {
    fullName: "Offers",
    icon: <FontAwesomeIcon icon={faGift} />,
  },
  {
    fullName: "Help",
    icon: <FontAwesomeIcon icon={faBookmark} />,
  },
  {
    fullName: "Sign In",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    fullName: "Cart",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
  },
];

const{visible, setVisible} = useContext(visibility)
const[searchRes, setSearchRes] = useState([])

function handleVisiblity(){
  setVisible(prev => !prev)

}

   

async function searchResultsFun(val){
  if(val == "") return
  let response = await fetch (`http://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`)
  let searchData = await response.json()
  setSearchRes(data.data)
}

async function fetchlatAndLang(id){
  if(id == "") return
  console.log(id)
  let response = await fetch (`http://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`)
  let searchData = await response.json()
  (data.data[0].geometry.location.lat)
}






  return (
   <div className="relative">
      
        <div>
          <div onClick={handleVisiblity} className={`w-full bg-black/50 h-full z-10 absolute ${visible ? "visible" : "invisible"}`}></div>
          <div className={`bg-white w-1/3 h-full z-40 absolute duration-300 ${visible ? "left-0" : "-left-[100%]"}`}>
          <p className="cursor-pointer bg-black text-white p-5 pr-5 h-10 w-10 flex justify-center items-center rounded-br-lg font-semiboldbold text-lg" onClick={handleVisiblity}>X</p>
          <input type="text" placeholder="Search something" className="border p-5 focus:outline-none focus:shadow-lg" onChange={(e) => searchResultsFun(e.target.value)} />
          <div>
            <ul onClick={() =>fetchlatAndLang(data.place_id)}>
              {searchRes.map((data) =>{
                <li>{data.structured_formatting.main_text} <p>{data.structured_formatting.secondary_text}</p></li>
              })}
              
            </ul>
          </div>
          </div>
          <div>
            
          </div>
        </div>



    <div className=" h-20 shadow-xl flex justify-center items-center">
      <div className=" w-[90%] flex justify-between items-center pr-10">
        <div className="flex items-center">
          <Link to={"/"}>
          <img
            className="w-[130px] cursor-pointer"
            src="https://imgs.search.brave.com/_mEq1V11ESTmHvF-Iwmrr6M3QSoyNMlci-rPrZgoroc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcHBv/c2l0ZWhxLmNvbS9z/dGF0aWMvZjExYTk0/MDNiYTYzYTU3NjZj/MGQzZmNlOTc1MGFj/YTQvOGQyODcvMV9s/b2dvX3N3aWdneV9k/MzI5NTAxMDMzLnBu/Zw"
            alt="logo"
          />
          </Link>
          
          <div className="cursor-pointer flex justify-center items-center" onClick={handleVisiblity}>
            <p className="border-b-2 border-black font-medium text-base"> Other </p>
          <FontAwesomeIcon icon={faAngleDown} className="pl-2 text-[#FC8019]" />
          </div>
        </div>

        <div className="flex gap-12 text-base font-medium">
          {navItems.map((data, i) => (
            <div key={i} className="flex justify-center items-center hover:text-[#FC8019]">
              <p className="px-2">{data.icon}</p>
              <p className="cursor-pointer">{data.fullName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Outlet/>
   
   </div>
  );
}

export default Navbar;
