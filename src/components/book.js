import React from "react";

export default function Book({ book }) {
  const [added, setAdded] = React.useState(false);
  return (
    <div>
      <h4>
        {book.title} - <em>{book.year}</em>
      </h4>
      <h5>{book.author}</h5>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (!added) {
            e.target.innerText = "Success";
          }
          console.log("Add", book);
          setAdded(true);
        }}
        disabled={added}
      >
        Add to Cart
      </button>
    </div>
  );
}
