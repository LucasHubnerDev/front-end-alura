import styles from "./CardEvent.module.css";

const CardEvent = ({ title, url, data, theme }) => {
  return (
    <>
      <article className={styles.article}>
        <img className={styles.imgCard} src={url} alt={title} />
        <div className={styles.cardBody}>
          <p className={styles.theme}>{theme}</p>
          <p className={styles.data}>{data}</p>
          <h3>{title}</h3>
        </div>
      </article>
    </>
  );
};

export default CardEvent;
