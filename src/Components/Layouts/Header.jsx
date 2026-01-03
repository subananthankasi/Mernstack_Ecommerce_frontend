import React from "react";
import Search from "./Search";
import { Link, useNavigate,  } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          {/* <img width="50px" src="/favicon.ico.png" /> */}
          <h3 style={{ color: "white" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              MERN
            </Link>{" "}
          </h3>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className="btn" id="login_btn" onClick={()=>navigate('/login')}>
          Login
        </button>

        <span id="cart" className="ml-3">
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          2
        </span>
      </div>
    </nav>
  );
};

export default Header;
