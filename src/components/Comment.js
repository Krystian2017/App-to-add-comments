import React from "react";
import "./Comment.css";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment }) => (
  <li>
    {text} <span>votes: {votes}</span>{" "}
    <button onClick={() => thumbUpComment(id)}>+</button>
    <button onClick={() => thumbDownComment(id)}>-</button>
  </li>
);

export default Comment;
