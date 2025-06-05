import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ClassCom from "./components/ClassCom";
import FunctionalCom from "./components/FunctionalCom";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="/" element={<FunctionalCom name="Akshay"/>} />
                <Route path="/ClassCom" element={<ClassCom name="kumar"/>} />
            </Route>
                <Route path="*" element={<h1>Page not found 404...</h1>}/>
        </Routes>
    );
}

export default App;
