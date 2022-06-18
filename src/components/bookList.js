import React, { useEffect, useState } from "react";
import Book from "./book";

export default function BookList({ topic, topicTitle }) {
  const [bookList, setBookList] = useState([]);

  function getQueryString(topicTitle) {
    if (topicTitle) {
      return `/books?${topicTitle}=${topic}`;
    }
    return "/books";
  }

  useEffect(() => {
    fetch(getQueryString(topicTitle))
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
      });
  }, [topic, topicTitle]);
  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.title + book.id} book={book} />
      ))}
    </div>
  );
}
