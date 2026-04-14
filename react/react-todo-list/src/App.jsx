import { use } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { TodoGroup } from "./components/TodoGroup";
import { TodoForm } from "./components/TodoForm";
import TodoContext from "./components/TodoProvider/TodoContext";

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
// ];

// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
// ];

function App() {
  // com o useState eu posso criar uma variável que vai ser monitorada entre re-renders, sempre que o valor for modificado ele será re-renderizado na tela.

  // const [estado atual, funcao que atualiza o estado] = useState(valor inicial)
  // eu nunca devo referenciar diretamente o estado atual, para modifica-lo devo usar a funcao acompanha do sufixo set

  // aqui eu desestruturo e pego o que eu quero usar do meu contexto
  const {
    todos,
    addTodo,
    openFormTodoDialog,
    closeFormTodoDialog,
    showDialog,
    selectedTodo,
    editTodo
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else addTodo(formData);

    closeFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            itens={todos.filter((t) => !t.completed)}
          ></TodoGroup>

          <TodoGroup
            heading="Concluido"
            itens={todos.filter((t) => t.completed)}
          ></TodoGroup>

          {/* DRY (DONT REAPEAT YOURSELF) */}

          {/* ao tentar não repetir código podemos acabar caindo na prop drilling */}

          {/* PROP DRILLING: O processo de passar dados de um componente pai para componentes filhos em diferentes níveis da árvore de componentes, usando props, mesmo que alguns desses componentes intermediários não utilizem esses dados diretamente */}

          {/* contextApi pode me ajudar a resolver esse problema provendo tudo que o componente precisa */}

          <Footer>
            {/* aqui eu te checando se a dialog está aberta (true/false) */}
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <TodoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              ></TodoForm>
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
