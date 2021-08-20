import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// setup vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51YIcGCYtxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Divergent",
    author: "Veronica Roth",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51h4JPR8ZIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Insurgent",
    author: "Veronica Roth",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51WKe9aGJIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Allegiant",
    author: "Veronica Roth",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
      ;
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // attribut, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book">
      <img src={img} alt="" />

      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        ref ex
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
