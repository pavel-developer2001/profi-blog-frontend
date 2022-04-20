import React, { FC } from "react";
import styles from "./AddImgComponent.module.scss";

interface AddImgComponentProps {
  imgArticle: any;
  setImgArticle: (arg: any) => void;
}
const AddImgComponent: FC<AddImgComponentProps> = ({
  imgArticle,
  setImgArticle,
}) => {
  const [testIMG, setTestIMG] = React.useState<any>(null);
  const handleChangeImg = (e: any) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setTestIMG(imageUrl);
    setImgArticle(e.target.files[0]);
  };
  return (
    <div className={styles.bodyImg}>
      {imgArticle ? (
        <img src={testIMG} alt="test img" className="add-room__img" />
      ) : (
        <>
          <label>Выбрать обложку статьи</label>
          <input
            className="position-relative"
            type="file"
            onChange={handleChangeImg}
            id="validationFormik107"
          />{" "}
        </>
      )}
    </div>
  );
};

export default AddImgComponent;
