import React from "react";
import styles from "./CommentBlock.module.scss";
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";

const CommentBlock = () => {
  return (
    <div className={styles.main}>
      <strong>Комментарии 324 </strong>
      <AddComment />
      <CommentsList />
    </div>
  );
};

export default CommentBlock;
