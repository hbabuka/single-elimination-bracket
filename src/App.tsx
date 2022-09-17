import "./styles/styles.scss";
import { TeamModel, teams } from "./bracket-data";
import { ReactElement } from "react";
import { Team } from "./components/round/round-segment/match/team/Team";
import { Match } from "./components/round/round-segment/match/Match";

const App = (): ReactElement => {
  
  return (
    <div className="App">
      <h1>Single Elimination Tournament</h1>
      {teams.map((team) => <Team data={team} type="WINNER" isChampion score={9}></Team>)}

      <Match />
    </div>
  );
}

export default App