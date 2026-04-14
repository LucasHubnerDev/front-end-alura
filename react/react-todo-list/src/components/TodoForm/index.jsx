import "./todo-form.style.css";

import { TextInput } from "../TextInput";
import { Button } from "../Button";

// fazendo destructuring no objeto passado para a função = props
export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="form-dialog">
      <TextInput
        name="description"
        id="description"
        placeholder="Digite o item que deseja adicionar"
        defaultValue={defaultValue}
        required
      />
      <Button name="btn-add-item" id="btn-add-item">
        Salvar item
      </Button>
    </form>
  );
}
