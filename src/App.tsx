import "./styles/styles.scss";
import { TeamModel, teams } from "./bracket-data";
import { ReactElement } from "react";
import { Team } from "./components/team/Team";

const App = (): ReactElement => {
  
  return (
    <div className="App">
      <h1>Single Elimination Tournament</h1>
      {teams.map((team) => <Team data={team} type="WINNER" isChampion score={9}></Team>)}

    </div>
  );
}

export default App