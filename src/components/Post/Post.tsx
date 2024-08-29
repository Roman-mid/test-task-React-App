import React from "react";
import { PostProps } from "./Post.types";
import style from "./Post.module.css";

const Post: React.FC<PostProps> = ({ className, title, body }) => {
  return (
    <div className={`${style.post} ${className}`}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.body}> {body}</p>
    </div>
  );
};

export default Post;
