import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

export default function HandleUser() {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    return <SignIn setToggle={setToggle} />;
  } else {
    return <Register setToggle={setToggle} />;
  }
}

function handleToggle(e, stateFn, value) {
  e.preventDefault();
  stateFn(value);
}

function handleChange(e, stateFn) {
  e.preventDefault();
  stateFn(e.target.value);
}

function Register({ setToggle }) {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function addUser(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((err) => console.log(err, "set failure banner"));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => handleChange(e, setName)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => handleChange(e, setEmail)}
      />
      <button onClick={addUser}>Register</button>
      <br />
      <button onClick={(e) => handleToggle(e, setToggle, true)}>
        Go to Sign In
      </button>
    </div>
  );
}

function SignIn({ setToggle }) {
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  function getUser(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/users?email=${email}`)
      .then((res) => res.json())
      .then((user) => {
        setCurrentUser(user[0]);
      })
      .catch((err) =>
        console.log(err, "set failure banner", "could not find user")
      );
  }

  return (
    <form>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => handleChange(e, setEmail)}
      />
      <button onClick={getUser}>Sign In</button>
      <br />
      <button onClick={(e) => handleToggle(e, setToggle, false)}>
        Go to Register
      </button>
    </form>
  );
}
