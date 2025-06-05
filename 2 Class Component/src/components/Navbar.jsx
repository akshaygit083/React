import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button>Functional Com</button>
      </Link>
      <Link to="/classCom">
        <button>Class Com</button>
      </Link>

      <hr />

      <Outlet /> {/* This renders the nested route component */}
    </div>
  );
}

export default Navbar;