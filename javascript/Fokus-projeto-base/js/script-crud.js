const addNewTaskBtn = document.querySelector(".app__button--add-task");
const addNewTaskForm = document.querySelector(".app__form-add-task");
const cancelActionBtn = document.querySelector(
  ".app__form-footer__button--cancel",
);
const removeConcluidasBtn = document.querySelector("#btn-remover-concluidas");
const removeTodasBtn = document.querySelector("#btn-remover-todas");

const lista = document.querySelector(".app__section-task-list");
const tarefaEmAndamento = document.querySelector(
  ".app__section-active-task-description",
);

const textAreaForNewTask = document.querySelector(".app__form-textarea");

let tasks = [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

const init = () => {
  const data = localStorage.getItem("tasks");
  if (!data) return;

  tasks.push(...JSON.parse(data));
  loadTasks();
};

const updateTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const removeClassAllElements = (seletor, classe) => {
  const elementos = document.querySelectorAll(seletor);
  elementos.forEach((el) => el.classList.remove(classe));
};

const createElementsForHtml = (task) => {
  const li = document.createElement("li");
  li.className = "app__section-task-list-item";

  const svgWrapper = document.createElement("div");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "app__section-task-icon-status");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "12");
  circle.setAttribute("fill", "#FFF");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z",
  );
  path.setAttribute("fill", "#01080E");

  svg.appendChild(circle);
  svg.appendChild(path);
  svgWrapper.appendChild(svg);

  const p = document.createElement("p");
  p.className = "app__section-task-list-item-description";
  p.textContent = task.description;

  const button = document.createElement("button");
  button.className = "app_button-edit";

  button.onclick = () => {
    const newDescription = prompt("Qual o novo nome da tarefa?");

    if (!newDescription || newDescription.trim().length === 0) {
      alert("Não foi possível alterar a tarefa");
      return;
    }

    p.textContent = newDescription;
    task.description = newDescription;
    updateTasks();
  };

  const img = document.createElement("img");
  img.setAttribute("src", "./imagens/edit.png");

  button.appendChild(img);

  li.appendChild(svgWrapper);
  li.appendChild(p);
  li.appendChild(button);

  // 👉 tarefa concluída
  if (task.completa) {
    li.classList.add("app__section-task-list-item-complete");
    button.disabled = true;
  } else {
    li.onclick = () => {
      if (button.disabled) return;

      if (p.textContent === tarefaEmAndamento.textContent) {
        li.classList.remove("app__section-task-list-item-active");
        tarefaSelecionada = null;
        liTarefaSelecionada = null;
        tarefaEmAndamento.textContent = "";
        return;
      }

      tarefaSelecionada = task;
      liTarefaSelecionada = li;
      tarefaEmAndamento.textContent = p.textContent;

      removeClassAllElements(
        ".app__section-task-list-item",
        "app__section-task-list-item-active",
      );

      li.classList.add("app__section-task-list-item-active");
    };
  }

  lista.appendChild(li);
};

const loadTasks = () => {
  lista.innerHTML = "";
  tasks.forEach(createElementsForHtml);
};

addNewTaskBtn.addEventListener("click", () => {
  addNewTaskForm.classList.toggle("hidden");
});

addNewTaskForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const description = textAreaForNewTask.value.trim();

  if (!description) {
    alert("Digite uma tarefa válida!");
    return;
  }

  const task = {
    description,
    completa: false, // padrão corrigido
  };

  tasks.push(task);
  updateTasks();
  loadTasks();

  textAreaForNewTask.value = "";
  addNewTaskForm.classList.add("hidden");
});

cancelActionBtn.addEventListener("click", () => {
  textAreaForNewTask.value = "";
  addNewTaskForm.classList.add("hidden");
});

document.addEventListener("focoFinalizado", () => {
  if (!tarefaSelecionada || !liTarefaSelecionada) return;

  liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
  liTarefaSelecionada.classList.add("app__section-task-list-item-complete");

  const botao = liTarefaSelecionada.querySelector("button");
  if (botao) botao.disabled = true;

  tarefaSelecionada.completa = true;

  tarefaSelecionada = null;
  liTarefaSelecionada = null;
  tarefaEmAndamento.textContent = "";

  updateTasks();
});

const removerTarefas = (somenteCompletas) => {
  const seletor = somenteCompletas
    ? ".app__section-task-list-item-complete"
    : ".app__section-task-list-item";

  document.querySelectorAll(seletor).forEach((el) => {
    el.remove();
  });

  const novasTasks = somenteCompletas
    ? tasks.filter((task) => !task.completa)
    : [];

  tasks.length = 0;
  tasks.push(...novasTasks);

  updateTasks();
  loadTasks();
};


removeConcluidasBtn.onclick = () => removerTarefas(true);
removeTodasBtn.onclick = () => removerTarefas(false)

init();
