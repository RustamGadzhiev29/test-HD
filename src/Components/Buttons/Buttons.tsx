import React from "react";
import left from "../Common/Images/left.svg";
import right from "../Common/Images/right.svg";
import styles from "./Buttons.module.scss";

type ButtonsPropsType = {
  changeDates: (value: number) => void;
  currentPage: number;
};

export const Buttons = ({
  changeDates,
  currentPage,
  ...props
}: ButtonsPropsType) => {
  const onClickNext = () => {
    return changeDates(currentPage + 1);
  };
  const onClickPrev = () => {
    return changeDates(currentPage - 1);
  };

  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.counterDisplay}>
        0{currentPage + 1}/0{6}
      </div>
      <button disabled={currentPage + 1 === 1} onClick={onClickPrev}>
        <img src={left} />
      </button>
      <button disabled={currentPage + 1 === 6} onClick={onClickNext}>
        <img src={right} />
      </button>
    </div>
  );
};
