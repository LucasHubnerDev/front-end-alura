import styles from "./Aside.module.css";

import logo from '../../assets/logo.svg'

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="logo Poupapp" />
      <footer className={styles.footer}>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};
