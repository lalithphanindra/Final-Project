import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Profile.css";
//import axios from "axios";
const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
  });
  console.log(profileData, "0");
  const onEditProfileSubmit = (e) => {
    console.log(profileData, "1");
    e.preventDefault();
    console.log(profileData, "2");
    setProfileData({
      name: name,
      email: email,
      password: password,
      designation: designation,
    });
    console.log(profileData, "3");
    // axios
    //   .post("http://localhost:8000", profileData)
    //   .then(function (response) {
    //     console.log(response);
    //     Navigate("/");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div class="hmm">
      <div calss="editprofile-container">
        <Navbar />

        <div className="header">
          <div>
            <h2 className="text1">Welcome to your Profile</h2>
          </div>
        </div>
        <div className="content2">
          <form className="form2" onSubmit={onEditProfileSubmit}>
            <div className="internal-form">
              <div className="input-field">
                <label className="name">Profile details </label>
                {/* <input type="text" placeholder="Update your name" className='name-input' /> */}
              </div>
              <div className="input-field">
                <label className="name">Name *</label>
                <input
                  type="text"
                  placeholder="Update your name"
                  className="name-input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label className="name">Email *</label>
                <input
                  type="text"
                  placeholder="Update  your Email"
                  className="name-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label className="name">Password *</label>
                <input
                  type="password"
                  placeholder="Update  your password"
                  className="name-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label className="name">
                  Designation<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Update your Description"
                  className="name-input"
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="get-started">
                <Link to={`/profile/edit-profile`}>
                  <button type="submit" className="text-get">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <div className="act">
            <div className="get-delete">
              <Link to={`/`}>
                <button type="submit" className="text-delete ">
                  Delete Your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
