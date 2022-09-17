import "./styles/styles.scss";
import { RoundModel } from "./bracket-data";
import { ReactElement, useEffect, useState } from "react";
import { Round } from "./components/round/Round";
import { bracket as serverData } from "./bracket-data";
import { getChampion } from "./utils";

const App = (): ReactElement => {
  const [roundsData, setRoundsData] = useState<RoundModel[]>([])

  useEffect(() => {
    setRoundsData(serverData)
  }, [])

  return (
    <div className="App">
      <div className="main-wrapper">
        <h1>The Knockouts</h1>
        <div className="tournament-wrapper">
          {roundsData.map((round, index) =>
            <Round roundData={round} championId={getChampion(roundsData)} key={index} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App