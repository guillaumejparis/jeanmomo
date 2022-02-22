import "./App.css";
import Logo from "./Logo";

// Do not forget to update service-worker if adding a new route
function App() {
  return (
    <div className="app">
      <div className="title">jean-maurice.</div>
      <div className="logos">
        <Logo
          route="https://guillaumejparis.github.io/recipes"
          text={"Basilic"}
        />
        <Logo route="/bw" text={"Bitwarden"} />
        <Logo route="/domoticz" text={"Domoticz"} />
        <Logo route="/netdata" text={"Netdata"} />
        <Logo route="/plex" text={"Plex"} />
        <Logo route="/qb" text={"qBitorrent"} />
      </div>
    </div>
  );
}

export default App;
