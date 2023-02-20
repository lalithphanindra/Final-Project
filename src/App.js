import React from "react";
import Login from "./Webpages/Login/Login";
import Signup from "./Webpages/Signup/Signup";
import Articlelist from "./Webpages/Articlelist/Articlelist";
import Homepage from "./Webpages/Home/Homepage";
import Authors_List from "./Webpages/Home/Authors_List";
import { Routes, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Type from "./Webpages/Type/Type";
import One from "./Webpages/One/One";
import EditProfile from "./Webpages/Profile/EditProfile";
import Profile from "./Webpages/Profile/Profile";
import { useStateContext } from "./Context/Cpro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articlelist />} />
        <Route path="/article/:id" element={<One />} />
        <Route path="/add-article" element={<Type />} />
        <Route path="/authors" element={<Authors_List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
