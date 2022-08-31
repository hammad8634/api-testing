// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";

const Narbar1 = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logoutFunc = () => {
    localStorage.clear();
    navigate("/signup");
    // navigate("/login");
  };

  return (
    <>
      <div>
        {auth ? (
          <ul className="navbar1-ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link onClick={logoutFunc} to="/signup" className="logout-btn">
                logout 
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar1-ul right-navbar">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Narbar1;
