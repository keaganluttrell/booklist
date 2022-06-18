import React, { useEffect, useState } from "react";
import Book from "./book";

export default function BookList({ topic, topicTitle, handleCart }) {
  const [bookList, setBookList] = useState([]);

  function getQueryString() {
    if (topicTitle) {
      return `/books?${topicTitle}_id=${topic.id}`;
    }
    return "/books";
  }

  useEffect(() => {
    console.log(getQueryString());
    fetch(getQueryString(topicTitle))
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
      });
  }, [topic, topicTitle]);
  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.title + book.id} book={book} handleCart={handleCart} />
      ))}
    </div>
  );
}
