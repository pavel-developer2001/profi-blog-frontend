import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import styles from "./CommentsList.module.scss";

const CommentsListItem = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
        />
        <strong>Елена</strong>
        <span>больше 1 года</span>
      </div>
      <div className={styles.body}>
        <p>
          Плохо работает, постоянно выскакивают некие губасто-силиконовые
          чучела. Одни и те же. Как сорняк-не извести.
        </p>
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
  return (
    <div className={styles.mainList}>
      <CommentsListItem />
      <CommentsListItem />
      <CommentsListItem />
      <CommentsListItem />
    </div>
  );
};

export default CommentsList;
