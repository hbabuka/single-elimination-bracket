import { ReactElement, useEffect, useState } from "react"
import { TeamModel, TeamsModel } from "../../../../bracket-data"
import { teams as serverData } from "../../../../bracket-data"

interface Props {
  teamData: TeamsModel
  type: 'LOSER' | 'WINNER'
  championId?: number
}

export const Team = ({ teamData, type, championId }: Props): ReactElement => {
  const [teams, setTeams] = useState<TeamModel[]>([])

  useEffect(() => {
    setTeams(serverData)
  }, [])

  const team = teams.find((team) => team.id === teamData.id)

  return (
    <>
      {team && 
        <div className={`team-wrapper ${type === 'WINNER' && "winner"} ${team.id === championId && "champion"}`}>
          <div className="team-info">
            <img src={team.imgUrl} alt={`${team.name} team`}/>
            <div className="team-name-wrapper">
              <h4 className="team-id">{team.id}</h4>
              <h4>{team.name}</h4>
            </div>      
            </div>    
          <h4 className="team-score">{teamData.score}</h4>
        </div>
      }
    </>    
  )
}