import { ReactElement } from "react";
import { MatchModel, TeamModel, teams, TeamsModel } from "../../../bracket-data";
import { Team } from "./team/Team";

interface Props {
  matchData: MatchModel
}

export const Match = ({ matchData }: Props): ReactElement => {
  const teamsData: TeamsModel[] = matchData.teams

  console.log("matchData:", matchData)
  return (
    <div className="match-wrapper">
      {teamsData.map((team) => <Team teamData={team} type="LOSER" score={0}/>)}
    </div>
  )
}