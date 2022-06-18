import React, { useEffect, useState } from "react";
import BookList from "./bookList";

export default function TopicList({ topic, topicTitle }) {
  const [topicList, setTopicList] = useState([]);
  const topicHeaderString = topic.charAt(0).toUpperCase() + topic.slice(1);
  useEffect(() => {
    fetch(`/${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setTopicList(data);
      });
  }, [topic]);
  return (
    <div>
      <h1>{topicHeaderString}</h1>
      {topicList.map((topic) => (
        <div key={topic.name + topic.id}>
          <h2>{topic.name}</h2>
          <BookList topic={topic} topicTitle={topicTitle} />
        </div>
      ))}
    </div>
  );
}
