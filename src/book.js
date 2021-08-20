import React from "react";

export const Book = ({ img, title, author }) => {
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
