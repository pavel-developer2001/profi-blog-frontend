import { Avatar, AvatarGroup, IconButton, Paper } from "@mui/material";
import React, { FC } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import styles from "./ArticleList.module.scss";
import { Link } from "react-router-dom";
import { IArticle } from "../../../../store/modules/article/types/IArticle";

interface ArticleListItemProps {
  id: number;
  title: string;
  text: string;
  img: null | string;
  date: string;
  userName: string;
  userId: number;
}
const ArticleListItem: FC<ArticleListItemProps> = ({
  id,
  title,
  text,
  img,
  date,
  userName,
  userId,
}) => {
  return (
    <Paper className={styles.main} elevation={3}>
      <div className={styles.header}>
        <div className={styles.headLeft}>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 24, height: 24 }}
          />{" "}
          <strong className={styles.name}>{userName}</strong>
        </div>
        <div className={styles.headRigth}>
          {" "}
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <PersonAddAlt1Icon />
          </IconButton>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyLeft}>
          <img
            src={
              img
                ? img
                : "https://avatars.mds.yandex.net/get-zen_doc/1880939/pub_5ec274cca23e1560113f276c_5ec276498600f212158d47a6/scale_1200"
            }
            alt='cover article'
            className={styles.cover}
          />
        </div>
        <div className={styles.bodyRigth}>
          <Link to={`/articles/` + id}>
            <strong className={styles.title}>{title}</strong>
            <p className={styles.text}>{text}</p>
            <span className={styles.date}>{date} дня назад</span>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <AvatarGroup max={2}>
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt='Remy Sharp'
              src='/static/images/avatar/1.jpg'
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt='Travis Howard'
              src='/static/images/avatar/2.jpg'
            />
          </AvatarGroup>
          <span>
            <strong>29</strong> комментариев
          </span>
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
    </Paper>
  );
};

interface ArticleListProps {
  articles: IArticle[];
}
const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.mainList}>
      {articles?.map((article: any) => (
        <ArticleListItem
          id={article.id}
          title={article.title}
          text={article.text}
          img={article.img}
          date={article.createdAt}
          userName={article.user.name}
          userId={article.user.id}
        />
      ))}
    </div>
  );
};

export default ArticleList;
