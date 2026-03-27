import "./App.css";
import FormularioDeEvento from "./components/FormularioDeEvento";

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
        <FormularioDeEvento></FormularioDeEvento>
      </section>
    </main>
  );
}

export default App;
