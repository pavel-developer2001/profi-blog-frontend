import userSlice from "./modules/user/user.slice";

import { combineReducers } from "redux";
import articleSlice from "./modules/article/article.slice";

export const rootReducer = combineReducers({
  user: userSlice,
  article: articleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
