import React, { useLayoutEffect, useRef } from "react";
import { eventsInfoType } from "../../State/State";
import style from "./YearesDisplay.module.scss";
import gsap from "gsap";

type YearesDisplayPropsType = {
  currentDates: eventsInfoType;
};
export const DisplayYears = ({ currentDates }: YearesDisplayPropsType) => {
  const startYear = useRef(null);
  const endYear = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(startYear.current, {
        duration: 0.5,
        textContent: `${currentDates.startYear}`,
        roundProps: "textContent",
      });
    }, startYear);
    return () => ctx.revert();
  }, [currentDates.startYear]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(endYear.current, {
        duration: 0.5,
        textContent: `${currentDates.endYear}`,
        roundProps: "textContent",
      });
    }, endYear);
    return () => ctx.revert();
  }, [currentDates.endYear]);

  return (
    <div className={style.yearesDisplayContainer}>
      <span ref={startYear} />
      <span ref={endYear} />
    </div>
  );
};
