import './fab-button.style.css'

export function FabButton({ children, ...rest }) {
    return (
        // espalhando atributos dinamicamente usando jsx
        <button className='fab' {...rest}>
            {children}
        </button>
    )
}