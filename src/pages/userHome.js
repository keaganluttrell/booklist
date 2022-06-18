import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

export default function UserHome() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  function handleLogout(e) {
    e.preventDefault();
    setCurrentUser(null);
  }
  if (currentUser) {
    console.log(currentUser);
    return (
      <>
        <div>Welcome {currentUser.name}!</div>
        <button onClick={handleLogout}>Log out</button>
      </>
    );
  } else {
    return <Home />;
  }
}
