import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms";

export default function Book({ book, handleCart }) {
  const currentUser = useRecoilValue(userState);

  return (
    <div>
      <h4>
        {book.title} - <em>{book.year}</em>
      </h4>
      <h5>{book.author}</h5>
      <button
        onClick={(e) => {
          handleCart(e, currentUser, book);
        }}
      >
        CartFn
      </button>
    </div>
  );
}
