import React, { useEffect, useState } from "react";
import "./Bookmarked.css";
const Bookmarked = ({ booksmark, minBlog }) => {
  const [min, setMin] = useState(0);

  useEffect(() => {
    minBlog.map((m) => {
      setMin(min + m.readtime);
    });
  }, [minBlog]);

  console.log(min);
  return (
    <div className="sidebar_list">
      <div className="sidebar-title">
        <h5 className="sidebar_min">Spent time on read : {min} min</h5>
      </div>
      <div className="sidebar_blogs">
        <h5 className="sidebar_blog">Bookmarked Blogs : {booksmark.length}</h5>
      </div>
      {booksmark.map((b) => (
        <div key={b.id} className="sidebar-list">
          <div className="bookmark-description">
            <h3>{b.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmarked;
