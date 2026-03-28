import styles from "./FormSelect.module.css";
export default function FormSelect({ options, ...props }) {
  return (
    <select className={styles.select} {...props} defaultValue={""}>
      <option value="" disabled>selecione um tema</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
