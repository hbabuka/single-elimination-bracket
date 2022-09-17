import { ReactElement, useEffect, useState } from "react"
import { TeamModel, TeamsModel } from "../../../../bracket-data"
import { teams as serverData } from "../../../../bracket-data"

interface Props {
  teamData: TeamsModel
  type: 'LOSER' | 'WINNER'
  isChampion?: boolean
}

export const Team = ({ teamData, type, isChampion }: Props): ReactElement => {
  const [teams, setTeams] = useState<TeamModel[]>([])

  useEffect(() => {
    setTeams(serverData)

  }, [serverData])

  const team = teams.find((team) => team.id === teamData.id)

  console.log("teamData", teamData)

  return (
    <div className={`team-wrapper ${type === 'WINNER' && "winner"} ${isChampion && "champion"}`}>
      {team &&
        <div className="team-info">
          <img src={team.imgUrl} alt={`${team.name} team`}/>
          <div className="team-name-wrapper">
            <h4 className="team-id">{team.id}</h4>
            <h4>{team.name}</h4>
          </div>      
          </div>
      }
      <h4>{teamData.score}</h4>      
    </div>
  )
}