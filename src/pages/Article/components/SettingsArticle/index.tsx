import { Button, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./SettingsArticle.module.scss";
import { useDispatch } from "react-redux";
import {
  removeArticle,
  updateArticle,
} from "../../../../store/modules/article/article.slice";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { dataUser } from "../../../../utils/getDataUserFromToken";

interface SettingsArticleProps {
  setExit: (arg: boolean) => void;
  params: any;
  title: string;
  text: string;
  exit: boolean;
  articleUserId: number;
}

const SettingsArticle: FC<SettingsArticleProps> = ({
  setExit,
  params,
  title,
  text,
  exit,
  articleUserId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

      await dispatch(updateArticle(payload));
      setAnchorEl(null);
      setExit(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoveArticle = () => {
    if (global.confirm("Вы действительно хотите удалить статью?")) {
      dispatch(removeArticle(params.id));
      setAnchorEl(null);
      history.push("/");
    }
  };
  return (
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
          ) : articleUserId === dataUser ? (
            <MenuItem onClick={handleUpdateArticle}>
              <div className={styles.menuIcon}>
                <EditIcon />
              </div>
              Редактировать
            </MenuItem>
          ) : null}
          {articleUserId === dataUser ? (
            <MenuItem onClick={handleRemoveArticle}>
              <div className={styles.menuIcon}>
                <DeleteIcon />
              </div>
              Удалить
            </MenuItem>
          ) : null}
        </Menu>
      </div>
    </div>
  );
};

export default SettingsArticle;
