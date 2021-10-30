import { Avatar, IconButton, TextField } from "@mui/material";
import React from "react";
import styles from "./AddComment.module.scss";
import SendIcon from "@mui/icons-material/Send";

const AddComment = () => {
  return (
    <div className={styles.main}>
      <Avatar src='/broken-image.jpg' />
      <div className={styles.inputBlock}>
        <TextField
          id='outlined-basic'
          sx={{ width: "500px" }}
          label='Комментрировать'
          variant='outlined'
          fullWidth
        />
        <div className={styles.btn}>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
