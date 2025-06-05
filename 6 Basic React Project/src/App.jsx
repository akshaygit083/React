import { useState } from "react";
import AllCarts from "./components/allCarts";
import { data } from "./components/allCarts";

function App() {
  const [val, setval] = useState("");
  const [filterData, setFilterData] = useState(data);

  function filterHandler() {
    
    let res = filterData.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );

    console.log('Filter value:', val);
    console.log('Filtered result:', res);

    console.log(res);
    setFilterData(res);
  }

  return (
    <div>
      <h1>Raste ka mal Saste me </h1>
      <input
        onChange={(e) => setval(e.target.value)}
        type="text"
        placeholder="Kya Chaiye tujhe......!"
      />
      <button onClick={filterHandler}>Dhoond Le</button>
      <AllCarts data={filterData} />
    </div>
  );
}

export default App;
