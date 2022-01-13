import React, { FC } from "react";
import styles from "./CategoryBlock.module.scss";
import { Chip, Stack } from "@mui/material";
import { ICategory } from "../../../../store/modules/article/types/ICategory";

interface CategoryBlockProps {
  categories: ICategory[];
}
const CategoryBlock: FC<CategoryBlockProps> = ({ categories }) => {
  return (
    <div className={styles.categoryBlock}>
      <Stack direction='row' spacing={1}>
        {categories?.map((category: any) => (
          <Chip key={category?.id} label={category?.category} color='primary' />
        ))}
      </Stack>
    </div>
  );
};

export default CategoryBlock;
