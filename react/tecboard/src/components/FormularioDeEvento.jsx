import styles from "./FormularioDeEvento.module.css"

const FormularioDeEvento = () => {
  return (
    <form className={styles.formEvento}>
      <h2>Preencha para criar um evento</h2>

      <label htmlFor="evento" className={styles.label}>Evento</label>
      <input type="text" className={styles.input} name="evento" placeholder="show do alok" id="evento" />

      <label htmlFor="data" className={styles.label}>Data</label>
      <input type="datetime-local" className={styles.input} name="data" id="data" />

      <label htmlFor="tema" className={styles.label}>Tema</label>
      <input type="text" className={styles.input} placeholder="Casa de doce" name="tema" id="tema" />

      <button type="submit" className={styles.botao}>enviar</button>
    </form>
  );
}

export default FormularioDeEvento;