<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dice Game</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,100;1,400&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <p class="text-center mt-3 fs-3 fw-bold" id="newGame">NEW GAME</p>
      </div>
      <div class="row" id="currentGame">
        <div class="col-sm-4 text-center d-flex flex-column justify-content-around">
          <div class="row">
            <p class="fs-2 fw-bold" id="player1">PLAYER 1</p>
            <p id="finalScorePlayer1" class="fs-1 text-danger fw-bold"></p>
          </div>
          <div class="row justify-content-center">
            <div class="scorebox">
              <p class="fs-5">CURRENT</p>
              <p id="sumOfRoundsPlayer1" class="fs-1 text-light"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 text-center pt-5 d-flex flex-column justify-content-around">
          <div class="row justify-content-center">
            <img src="./pictures/dice-1.png" alt="Dice" id="dice" />
          </div>
          <div class="row text-center">
            <div class="col text-center">
              <p class="fs-4 mb-5" id="rollDice">ROLLDICE</p>
              <p class="fs-4" id="numberHolded">HOLD</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 text-center d-flex flex-column justify-content-around">
          <div class="row">
            <p class="fs-2 fw-bold" id="player2">PLAYER 2</p>
            <p id="finalScorePlayer2" class="fs-1 text-danger fw-bold"></p>
          </div>
          <div class="row justify-content-center">
            <div class="scorebox">
              <p class="fs-5">CURRENT</p>
              <p id="sumOfRoundsPlayer2" class="fs-1 text-light"></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="./player.js"></script>

    <noscript>
      <p>
        Merci d'activer JavaScript afin de pouvoir bénéficier de toutes les
        fonctionnalités de notre site.
      </p>
    </noscript>
  </body>
</html>
