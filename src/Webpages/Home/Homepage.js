import React from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
const Homepage = () => {
  return (
    <div className="head">
      <Navbar />
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          width="1500"
          height="1000"
        />
      </div>
    </div>
  );
};

export default Homepage;
