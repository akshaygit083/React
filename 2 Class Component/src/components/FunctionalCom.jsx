import React from "react";
import { useState, useEffect } from "react";

function FunctionalCom({ name }) {
  console.log(name);
  //   let num = 6;
  //   const [num, setNum] = useState(54);
  const [num2, setNum2] = useState(64);
  async function fetchData() {
    console.log("fetching Data");
  }
  useEffect(() => {
    fetchData();
  }, []);
 
return (
  <div>
    <h1>{name}</h1>
    <h1>Functional Component</h1>
    <button onClick={() => setNum2(num2 + 1)}>Increament</button>
    {/* <p>{num}</p> */}
    <p>{num2}</p>
  </div>
);
}
export default FunctionalCom;
