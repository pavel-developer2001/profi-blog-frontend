import { Avatar, Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./AddArticle.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Editor } from "./components/Editor";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import { createArticle } from "../../store/modules/article/article.slice";
import { dataUser } from "../../utils/getDataUserFromToken";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Аниме",
  "Новости",
  "Игры",
  "Наука",
  "Кино",
  "Музыка",
  "Искусство",
  "Сериал",
  "Хит",
  "Космос",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  console.log("categories", personName);
  const [imgArticle, setImgArticle] = React.useState<any>(null);
  const [testIMG, setTestIMG] = React.useState<any>(null);
  const handleChangeImg = (e: any) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setTestIMG(imageUrl);
    setImgArticle(e.target.files[0]);
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleAddArticle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("text", text);
      formData.append("img", imgArticle);
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
        <div className={styles.bodyImg}>
          {imgArticle ? (
            <img src={testIMG} alt='test img' className='add-room__img' />
          ) : (
            <>
              <label>Выбрать обложку статьи</label>
              <input
                className='position-relative'
                type='file'
                onChange={handleChangeImg}
                id='validationFormik107'
              />{" "}
            </>
          )}
        </div>
        <div className={styles.bodyCategories}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='demo-multiple-chip-label'>
              Категории cтатьи
            </InputLabel>
            <Select
              fullWidth
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id='select-multiple-chip'
                  label='Категории cтатьи'
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* <Editor text={text} setText={setText} /> */}
      </div>
    </div>
  );
};

export default AddArticle;
