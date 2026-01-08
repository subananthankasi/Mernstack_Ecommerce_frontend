import React from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { logoutThunk } from "../../Redux/Actions/authAction";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isAuthenticate, data } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cart);


  const logoutHandler = async () => {
    await dispatch(logoutThunk()).unwrap()
    window.location.reload();
    navigate('/')
  };
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
        {isAuthenticate ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="default"
              id="dropdown-basic"
              className="text-white pr-5"
            >
              <figure className="avatar avatar-nav">
                <Image
                  width="50"
                  src={data?.user?.avatar ?? "/images/avatar.png"}
                  roundedCircle
                />
              </figure>
              <span>{data?.user?.name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-primary" onClick={() => navigate('/myprofile')}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item className="text-danger" onClick={() => logoutHandler()}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button
            className="btn"
            id="login_btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {/* <Link to="/cart" id="cart" className="ml-3">
          cart
        </Link> */}
        <Badge badgeContent={cartItems?.length} color="primary" style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
          <ShoppingCartIcon color="action" sx={{ color: "white" }} />
        </Badge>
        {/* <span className="ml-1" id="cart_count">
          {cartItems?.length}
        </span> */}
      </div>
    </nav>
  );
};

export default Header;
