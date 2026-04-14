import {useEffect, useState } from "react";

import TodoContext from "./TodoContext";

const TODOS = "todos";

// criando um provider
function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  // const [itemData, setItemData] = useState({});

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    // aqui eu usei a funcao para modificar o valor, assim o react vai detectar e re-renderiza esse componente na tela
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setSelectedTodo(null);
    setShowDialog(false);
  };

  const addTodo = (formData) => {
    // formData é um recurso moderno que tras um objeto contendo os dados passado pelo formulario
    // para isso funcionar devo colocar o atributo name nos inputs
    const description = formData.get("description");

    // estou passando todos os valores anteriores mais o novo todo
    // prevState (estado anterior)
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if(t.id === selectedTodo.id) {
          return {
            ...t,
            description: formData.get("description")
          }
        }
        return t
      })
    })
  }

  return (
    // passando um objeto para o todoContext
    // atributo value, onde eu passo o objeto de referencias de tudo que eu quero compartilhar
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo
      }}
    >
      {children}
    </TodoContext>
  );
}

export default TodoProvider;
