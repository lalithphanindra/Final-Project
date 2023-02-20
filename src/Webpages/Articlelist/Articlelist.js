import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../../Content/Articles";
import Articles from "../../Components/Articles/Article";
import "./Articlelist.css";
import Navbar from "../../Components/Navbar/Navbar";
const Articlelist = () => {
  return (
    <div className="article-list-container">
      <Navbar />
      {/* articles */}
      <div className="articles-wrapper">
        {articles.map((art) => (
          <div className="articles-item" key={art.id}>
            <Link to={`/article/${art.id}`}>
              <Articles art={art} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articlelist;
