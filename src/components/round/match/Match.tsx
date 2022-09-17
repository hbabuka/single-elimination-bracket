import { ReactElement } from "react";
import { MatchModel, TeamsModel } from "../../../bracket-data";
import { Team } from "./team/Team";

interface Props {
  matchData: MatchModel
}

export const Match = ({ matchData }: Props): ReactElement => {
  const teamsData: TeamsModel[] = matchData.teams
  
  return (
    <div className="match-wrapper">
      {teamsData.map((team, index) =>
        <Team teamData={team} type="LOSER" key={index} />
      )}
    </div>
  )
}