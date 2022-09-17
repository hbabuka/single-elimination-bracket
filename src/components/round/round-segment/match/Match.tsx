import { ReactElement } from "react";
import { MatchModel, TeamModel, teams } from "../../../../bracket-data";
import { Team } from "./team/Team";

interface Props {
  matchTeams?: MatchModel[]
  score?: number
}

export const Match = ({ matchTeams, score }: Props): ReactElement => {
  const matchTeamIdsArray = Object.values(teams)
  console.log(matchTeamIdsArray)
  // const matchData = teams.filter((team) => )
  return (
    <div className="match-wrapper">
      <Team data={teams[0]} type="LOSER" score={0} />
      <Team data={teams[1]} type="WINNER" score={0} isChampion/>
    </div>
  )
}