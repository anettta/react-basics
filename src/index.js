import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";

// setup vars

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
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
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
