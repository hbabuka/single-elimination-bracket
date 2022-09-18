import { TeamsModel, RoundModel } from "./bracket-data"
  
// Resolve the winner or the loser of the match
// Needed primarily for different styling of the team items
export const resolveTeamType = (data: TeamsModel[], score: number) => {
  const scoresArray = data.map((team) => team.score)
  const winner = Math.max(...scoresArray)

  if (score === winner) {
    return 'WINNER'
  } else return 'LOSER'
}

// Resolve tournament champion (winner of the final round)
// Pass it down to the children components for a dynamic solution
export const getChampion = (data: RoundModel[]) => {
  const finalRound = data[data.length - 1]
  const finalsData = finalRound.matches[0].teams
  const finalsScoresArray = finalsData.map((team) => team.score)
  const champion = Math.max(...finalsScoresArray)

  return finalsData?.find((team) => team.score === champion)?.id
}

// Find the finals round as a boolean
// Pass it down to the team component and use it for styling
export const isLastRound = (data: RoundModel): boolean => {
  if (data.title === 'Finals') {
    return true
  } else return false
}