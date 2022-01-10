import React, { useEffect } from "react";
import MainLayout from "./components/MainLayout";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/modules/user/user.slice";
import { selectUserToken } from "./store/modules/user/user.selector";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectUserToken);
  useEffect(() => {
    dispatch(setToken(localStorage.getItem("blog-token")));
  }, [isAuth]);
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
