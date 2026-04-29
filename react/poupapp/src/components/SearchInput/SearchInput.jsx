import { IconSearch } from "../Icons";
import styles from "./SearchInput.module.css";

export const SearchInput = (props) => {
  return (
    <div className={styles.container}>
      <IconSearch />
      <input className={styles.input} {...props} />
    </div>
  );
};
