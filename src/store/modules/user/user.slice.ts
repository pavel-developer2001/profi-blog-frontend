import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./types/IUser";
import AuthApi from "../../../services/api/auth-api";

export const register = createAsyncThunk(
  "user/register",
  async (payload: { name: string; email: string; password: string }) => {
    return await AuthApi.register(payload);
  }
);
export const login = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }) => {
    return await AuthApi.login(payload);
  }
);

interface UserState {
  user: IUser[];
  token: string;
  status: null | string;
  loading: boolean;
}
const initialState: UserState = {
  user: [],
  token: "",
  status: null,
  loading: true,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { access_token, ...userData } = action.payload.data;
        state.user.push(userData);
        window.localStorage.setItem(
          "blog-token",
          action.payload.data.access_token
        );
        state.loading = false;
        state.token = action.payload.data.access_token;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { access_token, ...userData } = action.payload.data;
        state.user.push(userData);
        window.localStorage.setItem(
          "blog-token",
          action.payload.data.access_token
        );
        state.loading = false;
        state.token = action.payload.data.access_token;
      }),
});

export default userSlice.reducer;
export const { setToken } = userSlice.actions;
