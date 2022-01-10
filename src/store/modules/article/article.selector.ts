import { RootState } from "../../reducer";
import { IArticle } from "./types/IArticle";

export const selectArticle = (state: RootState) => state.article;

export const selectAllArticles = (state: RootState): IArticle[] =>
  selectArticle(state).articles;

export const selectArticleLoading = (state: RootState): boolean =>
  selectArticle(state).loading;

export const selectOneArticle = (state: RootState): any =>
  selectArticle(state).article;
