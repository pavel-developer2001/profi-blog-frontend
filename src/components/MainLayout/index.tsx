import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
