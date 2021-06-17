import React from "react";

const Book = ({ book: { img, title, author } }) => {
  const handleClick = () => {
    alert("helllllr");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </article>
  );
};

export default Book;
