import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    title: "Caste",
    author: "Isabel Wilkerson",
    img: "https://images-na.ssl-images-amazon.com/images/I/51f42uWcUWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SY344_BO1,204,203,200_.jpg",
  },
  {
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    img: "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._SY414_BO1,204,203,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </section>
  );
}

const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
