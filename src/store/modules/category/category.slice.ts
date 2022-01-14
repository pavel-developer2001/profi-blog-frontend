import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CategoryApi from "../../../services/api/category-api";

export const find = createAsyncThunk("category/find", async () => {
  return await CategoryApi.findAll();
});

interface CategoryState {
  categories: any;
  status: null | string;
  loading: boolean;
}
const initialState: CategoryState = {
  categories: [],
  status: null,
  loading: true,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder.addCase(find.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.data;
    }),
});

export default categorySlice.reducer;
export const {} = categorySlice.actions;
