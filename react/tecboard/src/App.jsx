import "./App.css";
import EventForm from "./components/EventForm";

function App() {
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
        <EventForm></EventForm>
      </section>
    </main>
  );
}

export default App;
