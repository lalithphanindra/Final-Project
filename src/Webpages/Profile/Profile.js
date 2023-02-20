import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Venky">
      <div calss="editprofile-container">
        <Navbar />
        <div className="header">
          <div>
            <h2 className="text1">Welcome to your Profile</h2>
          </div>
        </div>
        <div className="content2">
          <div className="form2">
            <div className="internal-form">
              <div className="input-field">
                <label className="name">Profile details </label>
              </div>
              <div className="input-field">
                <label className="name">Name </label>
                <p className="name-dis">Plp</p>
              </div>
              <div className="input-field">
                <label className="name">Email </label>
                <p className="name-dis">patibandalp01@gmail.com</p>
              </div>
              <div className="input-field">
                <label className="name">Designation </label>
                <p className="name-dis"> Student</p>
              </div>
              <div className="get-edit">
                <Link to={`/profile/edit-profile`}>
                  <button type="submit" className="text-get">
                    Edit Your Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
