import React from "react";
import BookList from "../components/bookList";

export default function Books() {
  return <>
  <h1>Books</h1>
  <BookList topic={"books"} topicTitle={""} />
  </>;
}