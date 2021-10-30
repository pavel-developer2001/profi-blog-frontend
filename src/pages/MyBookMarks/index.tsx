import React from "react";
import styles from "./MyBookMarks.module.scss";

const MyBookMarks = () => {
  return (
    <div className={styles.main}>
      <strong className={styles.title}>Мои закладки</strong>
    </div>
  );
};

export default MyBookMarks;
