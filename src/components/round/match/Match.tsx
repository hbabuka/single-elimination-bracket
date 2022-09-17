import { ReactElement } from "react";
import { MatchModel, TeamsModel } from "../../../bracket-data";
import { Team } from "./team/Team";

interface Props {
  matchData: MatchModel
}

export const Match = ({ matchData }: Props): ReactElement => {
  const teamsData: TeamsModel[] = matchData.teams

  // Function to resolve the winner or the loser of the match
  // Needed primarily for different styling
  const resolveType = (score: number) => {
    const scoresArray = teamsData.map((team) => team.score)
    const winner = Math.max(...scoresArray)

    if (score === winner) {
      return 'WINNER'
    } else return 'LOSER'
  }
  
  return (
    <div className="match-wrapper">
      {teamsData.map((team, index) =>
        <Team teamData={team} type={resolveType(team.score)} key={index} />
      )}
    </div>
  )
}