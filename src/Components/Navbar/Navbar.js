import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//import { useStateContext } from "../../Context/Cpro";
const Navbar = () => {
  //const { user } = useStateContext();
  const navitems = [
    {
      path: "Home Page",
      link_to: "/",
    },
    {
      path: "Articles",
      link_to: "/articles",
    },
    {
      path: "Write",
      link_to: "/add-article",
    },
    {
      path: "Profile Info",
      link_to: "/profile",
    },
    {
      path: "ArticlesList",
      link_to: "/authors",
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        {navitems.map((item, i) => (
          <Link
            style={{
              textDecoration: "none",
            }}
            key={i}
            to={`${item.link_to}`}
          >
            <li className="navbar-item">{item.path}</li>
          </Link>
        ))}
      </div>
      <div className="navbar-right">
        {/* {!user ? ( */}
        <>
          <Link to={`/login`}>
            <button className="login-btn">Log in</button>
          </Link>
          <Link to={`/signup`}>
            <button className="signup-btn">Sign up</button>
          </Link>
          {/* ) : (
          <Link to={`/`}>
            <button className="signup-btn">Logout</button>
          </Link>
        )} */}
        </>
      </div>
    </div>
  );
};

export default Navbar;
