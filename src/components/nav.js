import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user/home/1">Sign In</Link>
      </li>
      <li>
        <Link to="/explore/moods">Moods</Link>
      </li>
      <li>
        <Link to="/explore/genres">Genres</Link>
      </li>
      <li>
        <Link to="/explore/books">Books</Link>
      </li>
      <li>
        <Link to="/user/cart">Cart</Link>
      </li>
    </nav>
  );
}
