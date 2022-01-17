import { combineReducers } from "redux";
import userSlice from "./modules/user/user.slice";
import commentSlice from "./modules/comment/comment.slice";
import articleSlice from "./modules/article/article.slice";

export const rootReducer = combineReducers({
  user: userSlice,
  article: articleSlice,
  comment: commentSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
