import { ReactElement } from "react"
import { BracketLines } from "./bracket-lines/BracketLines"
import { Match } from "./match/Match"

export const RoundSegment = (): ReactElement => {
  return (
    <div className="round-segment-wrapper">
      <div className="matches-wrapper">
        <Match />
        <Match />        
      </div>
      <BracketLines />
    </div>
  )
}