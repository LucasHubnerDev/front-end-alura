import styles from "./SavingStatus.module.css";
import { IconSavings } from "../Icons";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const SavingStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <p>
        <IconSavings />
        Economizar
      </p>

      <ProgressBar percent={percent} />
    </div>
  );
};
