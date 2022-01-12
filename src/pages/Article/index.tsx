import {
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Article.module.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { Link, useHistory, useParams } from "react-router-dom";
import CommentBlock from "./components/CommentBlock";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  oneArticle,
  removeArticle,
  updateArticle,
} from "../../store/modules/article/article.slice";
import {
  selectArticleLoading,
  selectOneArticle,
} from "../../store/modules/article/article.selector";

const Article = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const articleMain = useSelector(selectOneArticle);
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
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUpdateArticle = () => {
    setExit(true);
  };
  const canselUpdateArticle = () => {
    setExit(false);
    setAnchorEl(null);
  };
  const saveUpdateArticle = async (e: any) => {
    e.preventDefault();
    try {
      const payload = await { id: params.id, title, text };
      //@ts-ignore
      await dispatch(updateArticle(payload));
      setAnchorEl(null);
      setExit(false);
    } catch (error) {
      console.error(error);
    }
  };
  const history = useHistory();
  const handleRemoveArticle = () => {
    if (global.confirm("Вы действительно хотите удалить статью?")) {
      dispatch(removeArticle(params.id));
      setAnchorEl(null);
      history.push("/");
    }
  };
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
            <div className={styles.menuRigth}>
              <Button variant='outlined'>Подписаться</Button>
              <div className={styles.settings}>
                <Button
                  id='basic-button'
                  aria-controls='basic-menu'
                  aria-haspopup='true'
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreHorizIcon />
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <div className={styles.menuIcon}>
                      <BookmarkAddIcon />
                    </div>
                    Добавить в закладки
                  </MenuItem>
                  {exit ? (
                    <>
                      <MenuItem onClick={saveUpdateArticle}>
                        {" "}
                        <div className={styles.menuIcon}>
                          <EditIcon />
                        </div>
                        Сохранить
                      </MenuItem>
                      <MenuItem onClick={canselUpdateArticle}>
                        {" "}
                        <div className={styles.menuIcon}>
                          <EditIcon />
                        </div>
                        Отмена
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem onClick={handleUpdateArticle}>
                      {" "}
                      <div className={styles.menuIcon}>
                        <EditIcon />
                      </div>
                      Редактировать
                    </MenuItem>
                  )}

                  <MenuItem onClick={handleRemoveArticle}>
                    {" "}
                    <div className={styles.menuIcon}>
                      <DeleteIcon />
                    </div>
                    Удалить
                  </MenuItem>
                </Menu>
              </div>
            </div>
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
              <strong>{article.title}</strong>
            )}

            <span>{article.createdAt} - 44 тыс. прочитали</span>

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
              <p>{article.text}</p>
            )}
            <img
              src={
                article.img
                  ? article.img
                  : "https://avatars.mds.yandex.net/get-zen_doc/1880939/pub_5ec274cca23e1560113f276c_5ec276498600f212158d47a6/scale_1200"
              }
              alt='cover article'
            />
          </div>
          <div className={styles.categoryBlock}>
            <Stack direction='row' spacing={1}>
              {categories?.map((category: any) => (
                <Chip
                  key={category.id}
                  label={category.category}
                  color='primary'
                />
              ))}
            </Stack>
          </div>
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
        </>
      )}

      <CommentBlock />
    </div>
  );
};

export default Article;
