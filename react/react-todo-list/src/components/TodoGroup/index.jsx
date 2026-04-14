import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { SubHeading } from "../SubHeading";
import EmptyState from "../EmptyState";

export function TodoGroup({ itens, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      {itens && itens.length > 0 ? (
        <ToDoList>
          {itens.map(function (t) {
            return <ToDoItem key={t.id} item={t} />;
          })}
        </ToDoList>
      ) : (
        <EmptyState
          msg={
            heading === "Para estudar"
              ? "Nenhuma tarefa pendente"
              : "Nenhuma tarefa concluida"
          }
          type={"info"}
        ></EmptyState>
      )}
    </>
  );
}
