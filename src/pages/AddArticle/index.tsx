import { Avatar, Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./AddArticle.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createArticle } from "../../store/modules/article/article.slice";
import { dataUser } from "../../utils/getDataUserFromToken";
import AddImgComponent from "./components/AddImgComponent";
import AddCategoryForArticle from "./components/AddCategoryForArticle";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const [imgArticle, setImgArticle] = React.useState<any>(null);

  const handleAddArticle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("text", text);
      formData.append("img", imgArticle);
      for (let i = 0; i < personName.length; i++) {
        formData.append("categories", personName[i]);
      }
      dispatch(createArticle(formData));
      setText("");
      setTitle("");
      setPersonName([]);
      setImgArticle(null);
    } catch (error) {}
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headLeft}>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <Link to={"/users/" + dataUser}>
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <div className={styles.dataUser}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            <strong>Darl Side</strong>
          </div>
        </div>
        <div className={styles.headRigth}>
          <Button variant='contained' onClick={handleAddArticle}>
            Опубликовать
          </Button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyTitle}>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id='outlined-basic'
            label='Заголовок статьи'
            variant='outlined'
          />
        </div>
        <div className={styles.bodyText}>
          <TextField
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            id='outlined-multiline-static'
            label='Описание статьи'
            multiline
            rows={4}
          />
        </div>
        <AddImgComponent
          imgArticle={imgArticle}
          setImgArticle={setImgArticle}
        />
        <AddCategoryForArticle
          personName={personName}
          setPersonName={setPersonName}
        />
      </div>
    </div>
  );
};

export default AddArticle;
