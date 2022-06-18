export function handleAddToCart(e, currentUser, book) {
  e.preventDefault();
  if (currentUser) {
    fetch(`/carts?user_id=${currentUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        const [userCart] = data;
        userCart.books = addBookToArray(userCart.books, book);
        updateCart(userCart);
      })
      .catch((err) => console.log(err, "handleCart: set failure banner"));
  } else {
    alert("Please log in to add to cart");
  }
}

export function handleRemoveFromCart(e, currentUser, book) {
  e.preventDefault();
  if (currentUser) {
    fetch(`/carts?user_id=${currentUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        const [userCart] = data;
        userCart.books = removeBookFromArray(userCart.books, book);
        updateCart(userCart);
      })
      .catch((err) => console.log(err, "handleCart: set failure banner"));
  } else {
    alert("Please log in to remove from cart");
  }
}

function updateCart(userCart) {
  fetch(`/carts/${userCart.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCart),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("updateCart");
    })
    .catch((err) => console.log(err, "updateCart: set failure banner"));
}

function addBookToArray(books, book) {
  console.log("addBookToArray");
  if (books.find((b) => b.id === book.id)) {
    return books;
  }
  return [...books, book];
}

function removeBookFromArray(books, book) {
  console.log("removeBookFromArray");
  return books.filter((b) => b.id !== book.id);
}
