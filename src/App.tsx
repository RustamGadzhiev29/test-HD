import React from "react";
import styles from "./App.module.scss";
import { MainContent } from "./Components/MainContent/MainContent";
import { Paginator } from "./Components/MainContent/Paginator/Paginator";

export const App = () => {
  return (
    <div className={styles.app}>
      <MainContent />
    </div>
  );
};
