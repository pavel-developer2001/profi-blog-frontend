import userSlice from "./modules/user/user.slice";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
