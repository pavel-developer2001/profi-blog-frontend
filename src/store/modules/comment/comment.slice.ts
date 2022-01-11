import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CommentApi from "../../../services/api/comment-api";
import { IComment } from "./types/IComment";

export const createComment = createAsyncThunk(
  "comment/createComment",
  async (payload: any) => {
    return await CommentApi.create(payload);
  }
);
export const findAllCommentsByArticle = createAsyncThunk(
  "comment/findAllCommentsByArticle",
  async (id: string) => {
    return await CommentApi.findByArticle(id);
  }
);

interface CommentState {
  comments: IComment[];
  status: null | string;
  loading: boolean;
}
const initialState: CommentState = {
  comments: [],
  status: null,
  loading: true,
};
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.unshift(action.payload.data);
        state.loading = false;
      })
      .addCase(findAllCommentsByArticle.fulfilled, (state, action) => {
        state.comments = action.payload.data;
        state.loading = false;
      }),
});

export default commentSlice.reducer;
export const {} = commentSlice.actions;
