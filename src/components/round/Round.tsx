import { ReactElement } from "react";
import { RoundModel } from "../../bracket-data";
import { Match } from "./match/Match"

interface Props {
  roundData: RoundModel
}

export const Round = ({ roundData }: Props): ReactElement => {
  return (
    <div className="round-wrapper">
      <h2 className="round-title">{roundData.title}</h2>
      {roundData.matches.map((match) => <Match matchData={match}/>)}
    </div>
  )
}