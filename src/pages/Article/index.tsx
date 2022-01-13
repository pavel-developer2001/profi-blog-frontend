import { Avatar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Article.module.scss";
import { Link, useParams } from "react-router-dom";
import CommentBlock from "./components/CommentBlock";
import { useDispatch, useSelector } from "react-redux";
import { oneArticle } from "../../store/modules/article/article.slice";
import {
  selectArticleLoading,
  selectOneArticle,
} from "../../store/modules/article/article.selector";
import CategoryBlock from "./components/CategoryBlock";
import SettingsArticle from "./components/SettingsArticle";
import FooterArticle from "./components/FooterArticle";
import { selectUserToken } from "../../store/modules/user/user.selector";

const Article = () => {
  const articleMain = useSelector(selectOneArticle);
  const isAuth = useSelector(selectUserToken);
  const article = articleMain?.article;
  const categories = articleMain?.categories;
  const [exit, setExit] = useState(false);
  const [title, setTitle] = useState(article?.title);
  const [text, setText] = useState(article?.text);
  const loading = useSelector(selectArticleLoading);

  const dispatch = useDispatch();
  const params: any = useParams();

  useEffect(() => {
    dispatch(oneArticle(params.id));
  }, [params.id]);

  return (
    <div className={styles.main}>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          {" "}
          <div className={styles.menu}>
            <div className={styles.menuLeft}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />

              <Link to={"/users/" + article?.user?.id}>
                <div className={styles.dataAuthor}>
                  {" "}
                  <strong> {article?.user?.name}</strong>
                  <span> 125 507 подписчиков</span>{" "}
                </div>
              </Link>
            </div>
            {isAuth ? (
              <SettingsArticle
                setExit={setExit}
                params={params}
                title={title}
                text={text}
                exit={exit}
                articleUserId={article?.user?.id}
              />
            ) : null}
          </div>
          <div className={styles.body}>
            {exit ? (
              <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id='outlined-basic'
                label='Заголовок статьи'
                variant='outlined'
              />
            ) : (
              <strong>{article?.title}</strong>
            )}

            <span>{article?.createdAt} - 44 тыс. прочитали</span>

            {exit ? (
              <TextField
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                id='outlined-basic'
                label='Текст статьи'
                variant='outlined'
              />
            ) : (
              <p>{article?.text}</p>
            )}
            <img
              src={
                article?.img
                  ? article?.img
                  : "https://avatars.mds.yandex.net/get-zen_doc/1880939/pub_5ec274cca23e1560113f276c_5ec276498600f212158d47a6/scale_1200"
              }
              alt='cover article'
            />
          </div>
          <CategoryBlock categories={categories} />
          <FooterArticle />
        </>
      )}

      <CommentBlock />
    </div>
  );
};

export default Article;
