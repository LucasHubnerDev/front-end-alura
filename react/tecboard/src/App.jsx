import { useState } from "react";
import "./App.css";
import EventForm from "./components/EventForm";
import CardEvent from "./components/CardComponents/CardEvent";
import Theme from "./components/Theme";

function App() {
  const temas = [
    { id: 1, value: "frontend", label: "FRONT_END" },
    { id: 2, value: "backend", label: "BACK_END" },
    { id: 3, value: "datascience", label: "DATA_SCIENCE" },
    { id: 4, value: "devops", label: "DEV_OPS" },
  ];

  const [eventos, setEventos] = useState([]);

  const addEvent = (event) => {
    setEventos((prev) => [...prev, event]);
  };

  return (
    <main>
      <header>
        <div id="logo">
          <img src="logo.png" alt="" />
          <h1>tecboard</h1>
        </div>
      </header>
      <section className="heroBanner"></section>
      <section>
        <EventForm temas={temas} afterSubmit={addEvent}></EventForm>
      </section>
      <section className="themes">
        {temas.map((tema) => (
          <div key={tema.id}>
            <Theme texto={tema.label} />

            <section className="cards">
              {eventos && eventos.length > 0
                ? eventos
                    .filter((evento) => evento.theme === tema.value)
                    .map((evento) => (
                      <CardEvent
                        key={evento.id}
                        title={evento.title}
                        theme={evento.theme}
                        data={new Date(evento.date).toLocaleDateString()}
                        url={evento.image}
                      />
                    ))
                : "nenhum evento encontrado"}
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
