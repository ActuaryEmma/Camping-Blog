import React from "react";
import { Link } from "react-router-dom";

function NavBar({setUser}) {

  function handleLogoutClick() {
    fetch("http://localhost:3000/user", 
    { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div>
      <ul className="nav justify-content-center">
        <li>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        {/* <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li> */}

<button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </ul>
    </div>
  );
}
export default NavBar;
