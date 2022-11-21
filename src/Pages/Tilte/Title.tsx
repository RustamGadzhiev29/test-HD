import React from "react";
import style from "./Title.module.scss";

export const Title = () => {
  return (
    <div className={style.titleContainer}>
      <div className={style.title}>Исторические даты</div>;
      <div className={style.titleLine} />
    </div>
  );
};
