/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useLayoutEffect, useRef } from "react";
import { StateContext } from "../../State/State";
import gsap from "gsap";
import styles from "./Circle.module.scss";

type CirclePropsType = {
  changeDates: (value: number) => void;
  currentPage: number;
};

export const Circle = ({ changeDates, currentPage }: CirclePropsType) => {
  const data = useContext(StateContext);

  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tl.current, {
        rotate: "+=360",
        duration: 3,
      });
    }, tl);
    return () => ctx.revert();
  }, [currentPage]);

  return (
    <div className={styles.circle}>
      {data.map((d, index) => (
        <li
          onClick={() => changeDates(index)}
          key={d.eventsId}
          className={styles.circle__element}
          ref={tl}
        >
          <div
            className={`${
              index === currentPage ? styles.active : styles.passive
            }`}
          >
            <div>{index + 1}</div>
          </div>
          {index === currentPage && (
            <div className={styles.pointTitle}>{d.title}</div>
          )}
        </li>
      ))}
    </div>
  );
};
