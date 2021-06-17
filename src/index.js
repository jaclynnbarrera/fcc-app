import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  title: "Caste",
  author: "Isabel Wilkerson",
  img: "https://images-na.ssl-images-amazon.com/images/I/51f42uWcUWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const secondBook = {
  title: "Atomic Habits",
  author: "James Clear",
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SY344_BO1,204,203,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo
          nobis nemo provident sequi quia reprehenderit eveniet voluptatibus
          esse quos.
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
