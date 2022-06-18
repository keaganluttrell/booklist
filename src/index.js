import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/home.js";
import Moods from "./pages/moods.js";
import Genres from "./pages/genres.js";
import Cart from "./pages/cart.js";
import UserHome from "./pages/userHome.js";
import Nav from "./components/nav.js";
import Books from "./pages/books.js";

function Root() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/explore/moods" element={<Moods />} />
          <Route path="/explore/genres" element={<Genres />} />
          <Route path="/explore/books" element={<Books />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/user/home" element={<Home />} />
            <Route path="/user/home/:userid" element={<UserHome />} />
            <Route path="/user/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
