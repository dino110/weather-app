import "./App.css";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1>Weather app</h1>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
