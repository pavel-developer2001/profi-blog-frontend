import { RootState } from "../../reducer";

export const selectCategory = (state: RootState) => state.category;

export const selectAllCategory = (state: RootState): any =>
  selectCategory(state).categories;

export const selectCategoryLoading = (state: RootState): boolean =>
  selectCategory(state).loading;
