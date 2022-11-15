import React from "react";
import left from "../Common/Images/left.svg"
import right from "../Common/Images/right.svg"
import styles from "./Buttons.module.scss"


export const Buttons = () => {

return (
<div className={styles.buttonsContainer}>
<div>0{1}/0{1}</div>
<button>
<img src={left}/></button>
<button>
<img src={right}/></button>
</div>
);
};