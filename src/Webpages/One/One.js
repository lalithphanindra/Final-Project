import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./One.css";
const One = () => {
  return (
    <div className="single-container">
      <Navbar />

      <div className="single-container-header">
        <div className="single-container-header-top">
          <div className="single-container-header-top-wrapper">
            <div className="single-container-header-top-inner">
              <div className="single-container-header-top-inner-title">
                <p>Category</p>
                <h1>Welcome to all of you</h1>
              </div>
              <p className="single-conatiner-header-top-inner-desc"></p>
            </div>
          </div>
        </div>
        <div className="single-container-header-bottom">
          <img
            src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="single-container-header-wrapper">
            <div className="single-container-header-wrapper-left">
              <div className="single-container-header-wrapper-left-author">
                <h1>Written by</h1>
                <p>Plp</p>
              </div>
              <div className="single-container-header-wrapper-left-publishdate">
                <h1>Published on</h1>
                <p>17 Feb,2023</p>
              </div>
            </div>
            <div className="single-container-header-wrapper-right">
              <button>Edit Article</button>
              <button>Delete Article</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single-container-content">
        <p className="single-conatiner-header-top-inner-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
};

export default One;
