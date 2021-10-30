import React from "react";
import MainLayout from "./components/MainLayout";
import AppRouter from "./components/AppRouter";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
