import React from "react";
import { Link } from "react-router-dom";

function NavBar({user, setUser}) {

  function handleLogoutClick() {
    fetch("/logout", 
    { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        alert("Logged Out")
      }
    });
  }


  return (
    <div>
      <ul className="nav justify-content-center">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li> */}

        
        <li>
          <Link className="nav-link" to="/login">
            LoginForm
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li>

<button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </ul>
    </div>
  );
}
export default NavBar;
