import React from "react";
import styles from "./CommentBlock.module.scss";
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../../../store/modules/user/user.selector";
import { selectAllCommentByArticle } from "../../../../store/modules/comment/comment.selector";

const CommentBlock = () => {
  const isAuth = useSelector(selectUserToken);
  const comments = useSelector(selectAllCommentByArticle);
  return (
    <div className={styles.main}>
      <strong>Комментарии {comments.length} </strong>
      {isAuth ? <AddComment /> : null}
      <CommentsList />
    </div>
  );
};

export default CommentBlock;
