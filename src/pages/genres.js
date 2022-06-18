import React from "react";
import TopicList from "../components/topicList";
import { handleAddToCart } from "../functions/cartFunctions";

export default function Genres() {
  return (
    <TopicList
      topic={"genres"}
      topicTitle={"genre"}
      handleCart={handleAddToCart}
    />
  );
}
