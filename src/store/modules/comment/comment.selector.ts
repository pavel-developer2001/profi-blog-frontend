import { RootState } from "../../reducer";
import { IComment } from "./types/IComment";

export const selectComment = (state: RootState) => state.comment;

export const selectAllCommentByArticle = (state: RootState): IComment[] =>
  selectComment(state).comments;

export const selectCommentLoading = (state: RootState): boolean =>
  selectComment(state).loading;
