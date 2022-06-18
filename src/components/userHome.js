import React from "react";
import { useParams } from "react-router-dom";

export default function UserHome() {
  const { userid } = useParams();
  return <div>User Home #:{userid}</div>;
}
