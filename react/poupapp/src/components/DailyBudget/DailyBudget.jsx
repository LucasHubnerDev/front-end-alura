import styles from "./DailyBudget.module.css";

    const formater = Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"})

export const DailyBudget = ({value}) => {
    return (
        <p className={styles.dailyBudget}>
            {formater.format(value)}
        </p>
    )
}