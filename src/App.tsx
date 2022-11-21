import React from "react";
import styles from "./App.module.scss";
import { MainContent } from "./Pages/MainContent/MainContent";
import { Paginator } from "./Components/Paginator/Paginator";

export const App = () => {
  return (
    <div className={styles.app}>
      <MainContent />
    </div>
  );
};
