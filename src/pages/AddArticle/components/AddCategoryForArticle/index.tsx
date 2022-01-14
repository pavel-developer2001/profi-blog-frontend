import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import styles from "./AddCategoryForArticle.module.scss";
import { Theme, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCategory,
  selectCategoryLoading,
} from "../../../../store/modules/category/category.selector";
import { find } from "../../../../store/modules/category/category.slice";

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
// const names = [
//   "Аниме",
//   "Новости",
//   "Игры",
//   "Наука",
//   "Кино",
//   "Музыка",
//   "Искусство",
//   "Сериал",
//   "Хит",
//   "Космос",
// ];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface AddCategoryForArticleProps {
  personName: string[];
  setPersonName: (arg: string[]) => void;
}
const AddCategoryForArticle: FC<AddCategoryForArticleProps> = ({
  personName,
  setPersonName,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const categories = useSelector(selectAllCategory);
  const loading = useSelector(selectCategoryLoading);
  useEffect(() => {
    dispatch(find());
  }, []);
  return (
    <div className={styles.bodyCategories}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-chip-label'>Категории cтатьи</InputLabel>
        <Select
          fullWidth
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput id='select-multiple-chip' label='Категории cтатьи' />
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
          {loading ? (
            <p>loading</p>
          ) : (
            categories.map((category: any) => (
              <MenuItem
                key={category.id}
                value={category.name}
                style={getStyles(category.name, personName, theme)}
              >
                {category.name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default AddCategoryForArticle;
