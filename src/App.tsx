import "./styles/styles.scss";
import { RoundModel, TeamModel, teams } from "./bracket-data";
import { ReactElement, useEffect, useState } from "react";
import { Team } from "./components/round/match/team/Team";
import { Match } from "./components/round/match/Match";
import { BracketLines } from "./components/round/bracket-lines/BracketLines";
import { Round } from "./components/round/Round";
import { bracket as serverData } from "./bracket-data";

const App = (): ReactElement => {
  const [roundsData, setRoundsData] = useState<RoundModel[]>([])

  useEffect(() => {
    setRoundsData(serverData)
    
  }, [serverData])

  return (
    <div className="App">
      <div className="main-wrapper">
        <h1>The Knockouts</h1>
        <div className="tournament-wrapper">
          {roundsData.map((round, index) => <Round roundData={round} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App