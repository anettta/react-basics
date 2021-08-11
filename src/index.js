import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      className="picture"
      src="https://images-na.ssl-images-amazon.com/images/I/51YIcGCYtxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt=""
    />
  );
};
const Title = () => {
  return <h1>Divergent</h1>;
};

const Author = () => {
  return <h5>Veronica Roth</h5>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
