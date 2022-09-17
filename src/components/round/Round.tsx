import { ReactElement } from "react";
import { RoundModel } from "../../bracket-data";
import { BracketLines } from "./bracket-lines/BracketLines";
import { Match } from "./match/Match"

interface Props {
  roundData: RoundModel
  championId?: number
}

export const Round = ({ roundData, championId }: Props): ReactElement => {
  // Create a new array of items to generate the neede number of brackets
  // i.e. one bracket per pair of matches
  const numberOfMatches = roundData.matches.length
  const numberOfBrackets = Math.floor(numberOfMatches / 2)
  const bracketsArray = new Array(numberOfBrackets).fill('bracket')

  return (
    <div className="round-wrapper">
      <h2 className="round-title">{roundData.title}</h2>
      <div className="round-content">
        <div className="matches-wrapper">
          {roundData.matches.map((match, index) =>
            <Match matchData={match} key={index} championId={championId}/>
          )}
        </div>
        {bracketsArray.length > 0 &&
          <div className="brackets-wrapper">
            {bracketsArray.map((bracket, index) =>
              <BracketLines key={index}/>
            )}            
          </div>
        }
      </div>
    </div>
  )
}