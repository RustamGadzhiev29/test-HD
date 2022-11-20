import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./MainContent.module.scss";
import { Title } from "../Tilte/Title";
import { YearesDisplay } from "./YearsDisplay/YearsDisplay";
import { Paginator } from "./Paginator/Paginator";
import { Buttons } from "../Buttons/Buttons";
import { StateContext, eventsInfoType } from "../State/State";
import { Circle } from "./Circle/Circle";

export const MainContent = () => {
  
  const data = useContext(StateContext);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentDates, setCurrentDates] = useState<eventsInfoType>(data[0]);

  useEffect(() => {
    setCurrentDates(data[currentPage])
},
[currentPage, data])


  return (
    <div className={styles.containerBlock}>
      <Title />
      <YearesDisplay  currentDates={currentDates}/>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <Circle changeDates={setCurrentPage} currentPage={currentPage} />
      <Buttons changeDates={setCurrentPage} currentPage={currentPage} />
      <Paginator data={data} currentPage={currentPage}/>
    </div>
  );
};
