import { Avatar, Button, IconButton } from "@mui/material";
import React, { FC, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import styles from "./CommentsList.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findAllCommentsByArticle } from "../../../../../../store/modules/comment/comment.slice";
import {
  selectAllCommentByArticle,
  selectCommentLoading,
} from "../../../../../../store/modules/comment/comment.selector";

interface CommentsListItemProps {
  commentId: number;
  text: string;
  date: string;
  userName: string;
  userId: number;
}
const CommentsListItem: FC<CommentsListItemProps> = ({
  commentId,
  text,
  date,
  userName,
  userId,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
        />
        <strong>{userName}</strong>
        <span>{date}</span>
      </div>
      <div className={styles.body}>
        <p>{text}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <Button variant='text'>Ответить</Button>
        </div>
        <div className={styles.footerRigth}>
          <div className={styles.likeBtn}>
            {" "}
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <ThumbUpIcon />
            </IconButton>
          </div>
          <strong className={styles.countLikes}>120</strong>
          <div className={styles.likeBtn}>
            {" "}
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <ThumbDownAltIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentsList = () => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectAllCommentByArticle);
  const loading = useSelector(selectCommentLoading);
  useEffect(() => {
    dispatch(findAllCommentsByArticle(params.id));
  }, [params.id]);
  return (
    <div className={styles.mainList}>
      {loading ? (
        <p>loading</p>
      ) : comments.length > 0 ? (
        comments.map((item) => (
          <CommentsListItem
            key={item.id}
            commentId={item.id}
            date={item.createdAt}
            text={item.text}
            userId={item.user.id}
            userName={item.user.name}
          />
        ))
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
};

export default CommentsList;
