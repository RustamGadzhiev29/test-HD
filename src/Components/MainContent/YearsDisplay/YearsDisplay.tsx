import React from "react";
import { eventsInfoType } from "../../State/State";
import style from "./YearesDisplay.module.scss";

type YearesDisplayPropsType = {
  currentDates:eventsInfoType
}
export const YearesDisplay = ({currentDates}:YearesDisplayPropsType) => {
  return (
    <div className={style.yearesDisplayContainer}>
      <span>{currentDates.startYear}</span>
      <span>{currentDates.endYear}</span>
    </div>
  );
};
