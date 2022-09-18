import { ReactElement } from "react";
import { MatchModel, TeamsModel } from "../../../bracket-data";
import { resolveTeamType } from "../../../utils";
import { Team } from "./team/Team";

interface Props {
  matchData: MatchModel
  championId?: number
  isLastRound?: boolean
}

export const Match = ({ matchData, championId, isLastRound }: Props): ReactElement => {
  const teamsData: TeamsModel[] = matchData.teams
  
  return (
    <div className="match-wrapper">
      {teamsData.map((team, index) =>
        <Team teamData={team} type={resolveTeamType(teamsData, team.score)} key={index} championId={championId} isLastRound={isLastRound} />
      )}
    </div>
  )
}