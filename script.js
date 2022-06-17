const playerChoiceDisplay = document.createElement("h1")
const computerChoiceDisplay = document.createElement("h1")
const resultDisplay = document.createElement("h1")
const gameDisplay = document.getElementById("game")
const gameIconsDisplay = document.getElementById("game-icons")

gameDisplay.append(playerChoiceDisplay, computerChoiceDisplay, resultDisplay)
const choices = ["Rock", "Paper", "Scissors"]
let playerChoice
let computerChoice
const computerPlay = () => {
  computerChoice = choices[Math.floor(Math.random() * 3)]
  computerChoiceDisplay.innerHTML = `Computer chose: ${computerChoice}`
}
const resultFinder = () => {
  if (playerChoice === computerChoice) {
    resultDisplay.innerHTML = "It's a tie!"
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    resultDisplay.innerHTML = "You win!"
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    resultDisplay.innerHTML = "You lose!"
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    resultDisplay.innerHTML = "You win!"
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    resultDisplay.innerHTML = "You lose!"
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    resultDisplay.innerHTML = "You lose!"
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    resultDisplay.innerHTML = "You win!"
  }
}

const handleClick = (event) => {
  playerChoice = event.target.id
  computerPlay()
  playerChoiceDisplay.innerHTML = `You chose:  ${playerChoice}`
  resultFinder()
}

choices.forEach((choice) => {
  const button = document.createElement("img")
  button.src = `${choice}.png`
  button.id = choice
  button.addEventListener("click", handleClick)
  gameIconsDisplay.appendChild(button)
})
