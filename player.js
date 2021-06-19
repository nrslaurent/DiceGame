class Player {
  constructor (player,sumOfRoundsDisplayed, scoreDisplayed) {
    this.score = 0;
    this.sumOfRounds = 0;
    this.player = document.getElementById(player)
    this.sumOfRoundsDisplayed = document.getElementById(sumOfRoundsDisplayed);
    this.scoreDisplayed = document.getElementById(scoreDisplayed);
  }

  getScore() {
    return this.score;
  }

  setScore() {
    this.score += this.sumOfRounds
    this.sumOfRounds = 0;
  }

  getsumOfRounds() {
    return this.sumOfRounds;
  }
  
  setsumOfRounds(value) {
    this.sumOfRounds += value;
  }

  getsumOfRoundsDisplayed() {
    return this.sumOfRoundsDisplayed;
  }

  getFinalScoreDisplayed() {
    return this.scoreDisplayed;
  }

  resetScore() {
    this.score = 0;
  }

  resetsumOfRounds() {
    this.sumOfRounds = 0;
  }
}


var player1 = new Player("player1", "sumOfRoundsPlayer1", "finalScorePlayer1");
var player2 = new Player("player2", "sumOfRoundsPlayer2", "finalScorePlayer2");
var players = [player1,player2];

var currentPlayer = player1;

//add currentPlayer class to put red dot after player name
currentPlayer.player.classList.add("currentPlayer");

var isrollDice = false;

//display score and current values
players.forEach((player)=>{
  player.getFinalScoreDisplayed().innerText = player.getScore();
  player.getsumOfRoundsDisplayed().innerText = player.getsumOfRounds();
})

document.getElementById("rollDice").addEventListener('click', () => {
  if(currentPlayer === player1) {
    sumOfRounds(player1);
  }else {
    sumOfRounds(player2);
  }
})

document.getElementById("numberHolded").addEventListener('click', () => {
  if(currentPlayer === player1) {
    score(player1, player2)
  }else {
    score(player2, player1)
  }
});

document.getElementById("newGame").addEventListener('click', () => {
  players.forEach((player)=>{
    player.resetScore();
    player.resetsumOfRounds();
    player.getFinalScoreDisplayed().innerText = player.getScore();
    player.getsumOfRoundsDisplayed().innerText = player.getsumOfRounds();
  })
  document.getElementById("dice").src="./pictures/dice-1.png";
  currentPlayer = player1;
  player1.player.classList.add("currentPlayer");
  player2.player.classList.remove("currentPlayer");
  })

//Get a random number between 1 and 6
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function sumOfRounds(player) {
  if(currentPlayer === player && currentPlayer.getScore() < 100) {
      number = getRandomIntInclusive(1,6);
      //change dice picture after a rolldice
      let dice = null;
      switch(number) {
        case 1:
          dice = "./pictures/dice-1.png";
          break;
        case 2:
          dice = "./pictures/dice-2.png";
          break;
        case 3:
          dice = "./pictures/dice-3.png";
          break;
        case 4:
          dice = "./pictures/dice-4.png";
          break;
        case 5:
          dice = "./pictures/dice-5.png";
          break;
        case 6:
          dice = "./pictures/dice-6.png";
          break;
        default:
          dice = "./pictures/dice-1.png";
          break;
      }  
      document.getElementById("dice").src=dice;
      isrollDice = true;
    if(number !== 1) {
      currentPlayer.setsumOfRounds(number);
    } else {
      currentPlayer.resetsumOfRounds();
    };
    currentPlayer.getsumOfRoundsDisplayed().innerText = currentPlayer.getsumOfRounds();
  }
}

function score(player, nextPlayer) {
  if(currentPlayer === player && currentPlayer.getScore() < 100) {
    //check if player has clicked on ROLLDICE at least one
    if(isrollDice === true) {
      currentPlayer.setScore();
      currentPlayer.getFinalScoreDisplayed().innerText = currentPlayer.getScore();
      if(currentPlayer.getScore() >= 100) {
        currentPlayer.getFinalScoreDisplayed().innerHTML = "Victoire!</p>";
        currentPlayer = null;
      }else {
        currentPlayer = nextPlayer;
        player.player.classList.remove("currentPlayer");
        nextPlayer.player.classList.add("currentPlayer");
        isrollDice = false;
      }
    } 
  }
}