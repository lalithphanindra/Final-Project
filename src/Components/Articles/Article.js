import React from "react";
import "./Article.css";
const Article = (props) => {
  const art = props.art;
  return (
    <div className="article-container">
      <div className="article-img-wrapper">
        <img src={art.img} alt={art.title} />
      </div>
      <div className="article-content-wrapper">
        <div className="article-content-category">
          <p className="tfg"> {art.categoryId}</p>
        </div>
        <div className="article-content-title">
          <h2>{art.title}</h2>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H1M11 1V11"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="article-content-description">
          <p>{art.text}</p>
        </div>
        <div className="article-content-author">
          <div className="article-content-author-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Arun_Shourie.jpg"
              alt=""
            />
          </div>
          <div className="article-content-author-right">
            <p>{art.author}</p>
            <span>{art.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
