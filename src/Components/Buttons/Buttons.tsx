import React from "react";
import left from "../../Assets/Images/left.svg";
import right from "../../Assets/Images/right.svg";
import styles from "./Buttons.module.scss";

type ButtonsPropsType = {
  changeDates: (value: number) => void;
  currentPage: number;
};

export const Buttons = ({ changeDates, currentPage }: ButtonsPropsType) => {
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
      <button
        type="button"
        disabled={currentPage + 1 === 1}
        onClick={onClickPrev}
      >
        <img src={left} alt="" />
      </button>
      <button
        type="button"
        disabled={currentPage + 1 === 6}
        onClick={onClickNext}
      >
        <img src={right} alt="" />
      </button>
    </div>
  );
};
