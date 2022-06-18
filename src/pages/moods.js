import React from "react";
import TopicList from "../components/topicList";
import { handleAddToCart } from "../functions/cartFunctions";

export default function Moods() {
  return (
    <TopicList
      topic={"moods"}
      topicTitle={"mood"}
      handleCart={handleAddToCart}
    />
  );
}
