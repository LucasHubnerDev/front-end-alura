import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoProvider from "./components/TodoProvider/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* aqui eu estou envolvendo toda a minha aplicação ao meu contexto */}
    {/* qualquer componente filho do provider vai poder usar o seu contexto */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
);
