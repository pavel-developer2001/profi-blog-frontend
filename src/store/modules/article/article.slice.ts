import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "./types/IArticle";

import ArticleApi from "../../../services/api/article-api";

export const createArticle = createAsyncThunk(
  "article/createArticle",
  async (payload: any) => {
    return await ArticleApi.create(payload);
  }
);
export const allArticle = createAsyncThunk("article/allArticle", async () => {
  return await ArticleApi.findAll();
});
export const oneArticle = createAsyncThunk(
  "article/oneArticle",
  async (id: string) => {
    return await ArticleApi.findOne(id);
  }
);

interface ArticleState {
  articles: IArticle[];
  article: IArticle[];
  status: null | string;
  loading: boolean;
}
const initialState: ArticleState = {
  articles: [],
  article: [],
  status: null,
  loading: true,
};
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(createArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload.data);
        state.loading = false;
      })
      .addCase(allArticle.fulfilled, (state, action) => {
        state.articles = action.payload.data;
        state.loading = false;
      })
      .addCase(oneArticle.fulfilled, (state, action) => {
        state.article = action.payload.data;
        state.loading = false;
      }),
});

export default articleSlice.reducer;
export const {} = articleSlice.actions;
