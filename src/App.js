import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./component/PlayersList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Liste des Joueurs</h1>
      <hr />
      <br />
      <PlayersList />
    </div>
  );
}

export default App;
