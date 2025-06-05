//Routing In React..........................................................................
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// function Home(){
//   return <h2>Home</h2>
// }

// function About(){
//   return <h2>About</h2>
// }

// function Contact(){
//   return <h2>Contact</h2>
// }

// function App() {

//   return(
//     <BrowserRouter>
//       <nav>
//         <Link to = "/">Home </Link> | {""}
//         <Link to = "/about">About </Link> | {""}
//         <Link to = "/contact">Contact </Link>
//       </nav>
//       <Routes>
//         <Route path = "/" element = {<Home/>} />
//         <Route path = "/about" element = {<About/>} />
//         <Route path = "/contact" element = {<Contact/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// prop Drilling and Contaxt Api.................................................................................

import { useEffect, useState } from "react";

function App() {

  const [userName, setUserName] = useState('')

  useEffect(() =>{
    let data = "Akshay Kumar"
    setUserName(data)
  },[])

        return ( <div className="border-2 border-gray-950 text-xl font-semibold p-8 m-8" >
          <h1>App</h1>
          <GrandParent/>
        </div>)
 
}

export default App;

function GrandParent() {
  return <div className="border-2 border-cyan-400 text-xl font-semibold p-8" >
    <h1>Grand Parents</h1>
    <Parent/>
  </div>

}

function Parent() {
  return <div className="border-2 border-green-400 text-xl font-semibold p-8" >
    <h1>Parents</h1>
    <Child/>
  </div>
}

function Child() {
  return <div className="border-2 border-red-400 text-xl font-semibold p-8" >
    <h1>Children</h1>
  </div>
}
