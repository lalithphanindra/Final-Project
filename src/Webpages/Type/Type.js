import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { DefaultEditor } from "react-simple-wysiwyg";
import "./Type.css";
//import axios from "axios";
//import { Navigate } from "react-router-dom";
import { categories } from "../../Content/Articles";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [articleData, setArticleData] = useState({
    title: "",
    img: "",
    category: "",
    content: "",
  });
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  console.log(articleData, "0");
  const onSubmitAddArcticle = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      img: file,
      category: category,
      content: content,
    };
    setArticleData(data);
    console.log(articleData, "1");
    // axios
    //   .post("htpp://localhost/8000", articleData)
    //   .then(function (response) {
    //     console.log(response);
    //     Navigate("/");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <Navbar />

      <div className="write">
        <div className="write-image-upload-wrapper">
          <img className="writeImg" src={file} alt="" />
        </div>

        <form className="writeForm" onSubmit={onSubmitAddArcticle}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput" className="write-file-upload-label">
              Upload an Image
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <input
              className="writeInput"
              placeholder="Title of the Article"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option disabled selected>
                Category
              </option>
              {categories.map((cat) => (
                <option value={cat.cat_id} key={cat.cat_id}>
                  {cat.cat_name}
                </option>
              ))}
            </select>
          </div>
          <div className="write-editor-wrapper">
            <DefaultEditor
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="write-editor"
            />
          </div>
          <div className="write-publish-btn-wrapper">
            <button type="submit" className="write-publish-btn">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
