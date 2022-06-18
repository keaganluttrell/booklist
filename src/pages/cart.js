import React, { useEffect, useState } from "react";
import Book from "../components/book";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms";
import { handleRemoveFromCart } from "../functions/cartFunctions";

export default function UserCart() {
  const [bookList, setBookList] = useState([]);
  const currentUser = useRecoilValue(userState);

  useEffect(() => {
    if (currentUser) {
      fetch(`/carts?user_id=${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          const [{ books }] = data;
          setBookList(books);
        })
        .catch((err) => console.log(err, "set failure banner"));
    }
  }, []);

  if (currentUser) {
    return (
      <div>
        <h1>{currentUser.name}'s Cart</h1>
        {bookList.length === 0 && <h2>No books in cart</h2>}
        {bookList.map((book) => (
          <Book
            key={book.title + book.id}
            book={book}
            handleCart={handleRemoveFromCart}
          />
        ))}
      </div>
    );
  }

  return <h1>Please log in to view cart</h1>;
}
