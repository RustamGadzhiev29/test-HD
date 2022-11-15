import styles from "./MainContent.module.scss";
import { Title } from "../Tilte/Title";
import { YearesDisplay } from "./YearsDisplay/YearsDisplay";
import { Paginator } from "./Paginator/Paginator";
import { Buttons } from "../Buttons/Buttons";

export const MainContent = () => {
  return (
    <div className={styles.containerBlock}>
      <Title />
      <YearesDisplay />
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
      <ul className={styles.centralBlock}></ul>
      <Buttons/>
      <Paginator/>
    </div>
  );
};
