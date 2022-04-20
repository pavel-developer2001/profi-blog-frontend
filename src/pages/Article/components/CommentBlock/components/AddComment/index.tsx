import { Avatar, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./AddComment.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createComment } from "../../../../../../store/modules/comment/comment.slice";

const AddComment = () => {
  const dispatch = useDispatch();
  const params: any = useParams();
  const [text, setText] = useState("");

  const handleCreateComment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const payload = await { text, articleId: params.id };
      await dispatch(createComment(payload));
      setText("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.main}>
      <Avatar src="/broken-image.jpg" />
      <div className={styles.inputBlock}>
        <TextField
          id="outlined-basic"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "500px" }}
          label="Комментрировать"
          variant="outlined"
          fullWidth
        />
        {text.length > 0 ? (
          <div className={styles.btn}>
            <IconButton
              color="primary"
              onClick={handleCreateComment}
              aria-label="upload picture"
              component="span"
            >
              <SendIcon />
            </IconButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddComment;
