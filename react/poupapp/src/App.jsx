// hooks

// components
import { Container } from "./components/Container/Container";
import { Aside } from "./components/Aside/Aside";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { Main } from "./components/Main/Main";
import { Typography } from "./components/Typography/Typography";
import Card from "./components/Card/Card";
import { DailyBudget } from "./components/DailyBudget/DailyBudget";
import { SavingStatus } from "./components/SavingStatus/SavingStatus";

// style
import "./App.css";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput placeholder="Procure seu dinheiro..." />
        <div>
          <Typography variant="h1">Hello friend</Typography>
          <Typography variant="p">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponível:</Card.Header>
            <Card.Body>
              <DailyBudget value="200" />
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Progresso da meta financeira:</Card.Header>
            <Card.Body>
              <SavingStatus percent={100}/>
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
