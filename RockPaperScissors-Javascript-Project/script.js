function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}
//console.log(getComputerChoice())

const totalScore = {computerScore : 0, playerScore : 0}
function getResult(playerChoice, computerChoice) {

  let score1,score2;
  if(playerChoice == computerChoice){
    score1 = 0
  }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score1 = 1  
  }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score1 = 1  
  }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score1 = 1  
  }
  else{
    score1 = -1 
  }

  if(computerChoice == playerChoice){
    score2 = 0
  }else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
    score2 = 1  
  }else if(computerChoice == 'Paper' && playerChoice == 'Rock'){
    score2 = 1  
  }else if(computerChoice == 'Scissors' && playerChoice == 'Paper'){
    score2 = 1  
  }
  else{
    score2 = -1 
  }
  return score1, score2
  
}

function showResult(score1,score2, playerChoice, computerChoice) {
  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  let computerScoreDiv = document.getElementById('computer-score')


  if(score1 == -1){
    resultDiv.innerText = 'you lose!'
  }else if(score1 == 0){
    resultDiv.innerText = 'you Drew!!'
    
  }else
  {
    resultDiv.innerText = 'you won!!!'
    
  }
  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `your score : ${totalScore['playerScore']}`
  computerScoreDiv.innerText = `comp score: ${totalScore['computerScore']}`
}

function onClickRPS(playerChoice) {
  //console.log({playerChoice})
  const computerChoice = getComputerChoice()
   // console.log({computerChoice}) 
  const score1 = getResult(playerChoice, computerChoice)
  const score2 = getResult(computerChoice, playerChoice)
  totalScore['playerScore'] += score1
  totalScore['computerScore'] += score2
 // console.log({score1})
 // console.log({score2})
  //console.log(totalScore)
  showResult(score1,score2, computerChoice, playerChoice)

}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
  

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}
function endGame() {

  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  let computerScoreDiv = document.getElementById('computer-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
  computerScoreDiv.innerText = '' 
}
playGame()