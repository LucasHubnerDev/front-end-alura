import './text-input.style.css'

// props são todos atributos passados na abertura da chamado do componente
export function TextInput (props) {
    return <input {...props} className="text-input"/>
}