import "./styles/styles.scss";
import { TeamModel, teams } from "./bracket-data";
import { ReactElement } from "react";
import { Team } from "./components/round/round-segment/match/team/Team";
import { Match } from "./components/round/round-segment/match/Match";
import { BracketLines } from "./components/round/round-segment/bracket-lines/BracketLines";
import { RoundSegment } from "./components/round/round-segment/RoundSegment";
import { Round } from "./components/round/Round";

const App = (): ReactElement => {
  
  return (
    <div className="App">
      <h1>Single Elimination Tournament</h1>
      {teams.map((team) => <Team data={team} type="WINNER" isChampion score={9}></Team>)}

      <Match />
      <BracketLines />
      <RoundSegment />

      <Round />
    </div>
  );
}

export default App