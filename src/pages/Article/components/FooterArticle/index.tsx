import React from "react";
import styles from "./FooterArticle.module.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const FooterArticle = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <AvatarGroup max={3}>
          <Avatar
            sx={{ width: 28, height: 28 }}
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
          />
          <Avatar
            sx={{ width: 28, height: 28 }}
            alt='Travis Howard'
            src='/static/images/avatar/2.jpg'
          />
          <Avatar
            sx={{ width: 28, height: 28 }}
            alt='Cindy Baker'
            src='/static/images/avatar/3.jpg'
          />
        </AvatarGroup>
        <strong>5677 нравится</strong>
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
  );
};

export default FooterArticle;
