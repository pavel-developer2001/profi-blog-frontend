import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubscribesList.module.scss";

const SubscribesListItem = () => {
  return (
    <div className={styles.block}>
      <Link to='/users/12' className={styles.main}>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        <strong>Heodark</strong>
      </Link>
    </div>
  );
};
const SubscribesList = () => {
  return (
    <div className={styles.mainList}>
      <SubscribesListItem />
      <SubscribesListItem />
      <SubscribesListItem />
      <SubscribesListItem />
    </div>
  );
};

export default SubscribesList;
