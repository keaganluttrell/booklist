import React from "react";
import BookList from "../components/bookList";
import { handleAddToCart } from "../functions/cartFunctions";

export default function Books() {
  return (
    <>
      <h1>Books</h1>
      <BookList topic={"books"} topicTitle={""} handleCart={handleAddToCart} />
    </>
  );
}
