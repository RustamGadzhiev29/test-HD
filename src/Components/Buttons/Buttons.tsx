import React from "react";
import left from "../Common/Images/left.svg"
import right from "../Common/Images/right.svg"
import styles from "./Buttons.module.scss"

type ButtonsPropsType ={
    changeDates: (value: number)=>void
    currentPage: number

}

export const Buttons = ({changeDates, currentPage, ...props}:ButtonsPropsType) => {

    const onClickNext = () => {debugger;
        return changeDates (currentPage + 1)}
    const onClickPrev = () => {debugger;
       return changeDates (currentPage - 1)}
    
return (
<div className={styles.buttonsContainer}>
<div>0{1}/0{1}</div>
<button onClick={onClickNext}>
<img  src={left}/></button>
<button onClick={onClickPrev} >
<img src={right}/></button>
</div>
);
};