import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms";
import HandleUser from "../components/handleUser";
import UserHome from "./userHome";

export default function Home() {
  const currentUser = useRecoilValue(userState);

  if (currentUser) {
    return <UserHome />;
  } else {
    return <div>
      <h1>Home - Welcome</h1>
      <HandleUser />
      </div>
  }
}
