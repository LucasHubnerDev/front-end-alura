import styles from './ProgressBar.module.css'

export const ProgressBar = ({ percent }) => {
  // Usando Intl para formatar numero (locale, options)
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 0
  }).format(percent / 100)

  return (
    <div className={styles.wrapper}>
      {/* passando um objeto com style={{}} */}
      <div className={styles.filled} style={{width:formattedValue}}>
        {formattedValue}
      </div>
      <div className={styles.rest}></div>
    </div>
  )
}