import "./Authors.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Authors_List = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 4 things to learn as a frontend developer!",
      Poster:
        "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1",
      author: "Plp",
      date: "13Feb, 2023",
      content:
        "Here are the top things to learn as a front end developer. 1) HTML 2)CSS 3)JS 4) React",
      category: "Technology",
    },
    {
      id: 2,
      title: "Jairam Ramesh from the INC Party",
      Poster:
        "https://img.jagranjosh.com/imported/images/E/Articles/Math-640x315_September_2018.jpg",
      author: "Plp",
      date: "19 Jan,2022",
      content:
        "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
      category: "Politics",
    },
    {
      id: 3,
      title: "Top things to learn as a backend developer!",
      Poster:
        "https://d15fwz9jg1iq5f.cloudfront.net/wp-content/uploads/2020/05/06110010/Blog-NHIEFB.jpg",
      author: "Plp",
      date: "1980-09-02",
      content:
        "Never Have I Ever season four is definitely happening, but we are still waiting on exactly when the Netflix hit will return. But perhaps we should savour the wait – it is the final season, after all.Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
      category: "Technology",
    },
    {
      id: 4,
      title: "Top things happening in the world",
      Poster:
        "https://lumiere-a.akamaihd.net/v1/images/pp_thejunglebook2016_herobanner_mobile_19907_22212b81.jpeg?region=0,0,640,480",
      author: "Plp",
      date: "1974-01-05",
      content:
        "The Jungle Book is not based on a true story. The Jungle Book is a collection of short stories, or fables, that use animal characters to teach a moral or lesson. The narrator tells the story in this book as if they are legends, but they are made-up stories created by Rudyard KiplingMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
      category: "News",
    },
    {
      id: 5,
      title: "Here is all you need to know about ChatGPT",
      Poster:
        "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/border-gavaskar-trophy-1674379225417-original.jpg",
      author: "Plp",
      date: "2023-01-05",
      content:
        "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi, Dharamshala, and Ahmedabad StadiumMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
      category: "Technology",
    },
    {
      id: 6,
      title:
        "Sanctions-hit Russia pitches manufacture of its civil jet in India",
      Poster:
        "https://images.shiksha.com/mediadata/images/articles/1429273800php5OPdVh.jpeg",
      author: "Plp",
      date: "1974-01-05",
      content:
        "India is a Sovereign Socialist Secular Democratic Republic with a Parliamentary form of government which is federal in structure with unitary features. There is a Council of Ministers with the Prime Minster as its head to advice the President who is the constitutional head of the country Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
      category: "News",
    },
  ]);
  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId)); /** delete api */
    //setBlogs(blogsResponseAfterDelete)
  };
  const editBlog = (blogId) => {
    // open edit view
  };
  return (
    <div className="container">
      <div className="ViewPage">
        {blogs.map((blog) => (
          <div className="authorCard" key={blog.id}>
            {blog.author}
            <span className="authors_names">{blog.category}</span>
            <span calssName="authors_names">{blog.title}</span>
            <div className="cardActions">
              <Link to="/add-article">
                <button className="edit_btn" onClick={() => editBlog(blog.id)}>
                  Edit
                </button>
              </Link>
              <button onClick={() => deleteBlog(blog.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Authors_List;
