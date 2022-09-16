import { ReactElement } from "react"
import { TeamModel } from "../../bracket-data"

interface Props {
  data: TeamModel
  type: 'LOSER' | 'WINNER'
  isChampion: boolean
  score: number
}

export const Team = ({ data, type, isChampion, score }: Props): ReactElement => {
  return (
    <div className={`team-wrapper ${type === 'WINNER' && "winner"} ${isChampion && "champion"}`}>
      <div className="team-info">
        <img src={data.imgUrl} alt={`${data.name} team`}/>
        <div className="team-name-wrapper">
          <h4 className="team-id">{data.id}</h4>
          <h4>{data.name}</h4>
        </div>      
      </div>
      <h4>{score}</h4>      
    </div>
  )
}