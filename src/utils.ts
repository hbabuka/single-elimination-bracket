import { TeamsModel, RoundModel } from "./bracket-data"
  
// Function to resolve the winner or the loser of the match
// Also used to resolve the champion in the final round
// Needed primarily for different styling of the team items
export const resolveTeamType = (data: TeamsModel[], score: number) => {
  const scoresArray = data.map((team) => team.score)
  const winner = Math.max(...scoresArray)

  if (score === winner) {
    return 'WINNER'
  } else return 'LOSER'
}

// Resolve tournament champion
// Pass it down to the children components for a dynamic solution
export const getChampion = (data: RoundModel[]) => {
  const finalRound = data[data.length - 1]
  const finalsData = finalRound.matches[0].teams
  const finalsScoresArray = finalsData.map((team) => team.score)
  const champion = Math.max(...finalsScoresArray)

  return finalsData?.find((team) => team.score === champion)?.id
}