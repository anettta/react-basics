import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// setup vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51YIcGCYtxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Divergent",
  author: "Veronica Roth",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>description here</p>
      </Book>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
