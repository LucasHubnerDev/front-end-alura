import styles from "./FormSelect.module.css";
export default function FormSelect({ options, ...props }) {
  return (
    <select className={styles.select} {...props}>
      {options.map((opt) => (
        <option key={opt.id} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
