document.body.addEventListener( 'keydown' , function(e){

    const START = document.getElementById('start')

    if ( e.key === ' ') {

        START.textContent = ""

        ballMove()

        ballCollisionPlayers()

        ballCollisionWindow()

        moveOpponent()

        gameLoop()

    }

})

/* PLAYER MOVEMENT */

const PLAYER = document.getElementById('player1')

let playerY = document.body.clientHeight / 2
let currentPlayerY = parseFloat(getComputedStyle(PLAYER).top)
let currentPlayerX = parseFloat(getComputedStyle(PLAYER).left)

const PLAYGROUND = document.getElementById("playground")
const MAX_TOP = 1.5 + "px"

function movePlayer (direction) {

    if ( direction === "up" ) {

        if ( PLAYER.getBoundingClientRect().top >= 0 ) {

            playerY -= 20

        }

    } else if ( direction === "down") {

        if ( PLAYER.getBoundingClientRect().top < 711.5 ) {

        playerY += 20

        }
    }

    PLAYER.style.top = playerY + "px"

}

document.body.addEventListener ( 'keydown' , (e) => {

    if ( e.key === "ArrowUp") {

        movePlayer("up")

    } else if ( e.key === "ArrowDown") {

        movePlayer("down")

    }

})

/* OPPONENT MOVEMENT */

const OPPONENT = document.getElementById("opponent")

let opponentY = document.body.clientHeight / 2
let currentOpponentY = parseFloat(getComputedStyle(OPPONENT).top)
let currentOpponentX = parseFloat(getComputedStyle(OPPONENT).left)

function moveOpponent () {

    if ( currentBallX > document.body.clientWidth / 2 ) {

        if ( BALL.getBoundingClientRect().y + BALL.clientHeight >= OPPONENT.getBoundingClientRect().y + OPPONENT.clientHeight ) {

            opponentY += 4
    
        } else if ( BALL.getBoundingClientRect().y < OPPONENT.getBoundingClientRect().y ) {
    
            opponentY -= 4
    
        }

    } else {

        if ( BALL.getBoundingClientRect().y + BALL.clientHeight >= OPPONENT.getBoundingClientRect().y + OPPONENT.clientHeight ) {

            opponentY += 2
    
        } else if ( BALL.getBoundingClientRect().y < OPPONENT.getBoundingClientRect().y ) {
    
            opponentY -= 2
    
        }

    }

    OPPONENT.style.top = opponentY + "px"

    requestAnimationFrame(moveOpponent)
}

/* BALL MOVEMENT */

const BALL = document.getElementById("ball")
let currentBallX = parseFloat(getComputedStyle(BALL).left)
let currentBallY = parseFloat(getComputedStyle(BALL).top)

let ballX = document.body.clientWidth / 2

let directionX = -1
let directionY = 1

function ballMove () {

    currentBallX += 4 * directionX
    BALL.style.left = currentBallX + "px"

    if ( currentBallY <= 0 || currentBallY >= PLAYGROUND.clientHeight ) {

        directionY = -directionY

    }

    currentBallY += directionY * 4
    BALL.style.top = currentBallY + "px"
        
        requestAnimationFrame(ballMove)
    
}

/* COLLISIONS */

function ballCollisionPlayers () {

    if ( BALL.getBoundingClientRect().right === OPPONENT.getBoundingClientRect().left &&
         BALL.getBoundingClientRect().y + BALL.clientHeight >= OPPONENT.getBoundingClientRect().y &&
         BALL.getBoundingClientRect().y <= OPPONENT.getBoundingClientRect().y + OPPONENT.clientHeight) {

    directionX = -directionX
    
    }

    if ( BALL.getBoundingClientRect().left === PLAYER.getBoundingClientRect().right &&
         BALL.getBoundingClientRect().y + BALL.clientHeight >= PLAYER.getBoundingClientRect().y &&
         BALL.getBoundingClientRect().y <= PLAYER.getBoundingClientRect().y + PLAYER.clientHeight) {

            directionX = -directionX

        }

    requestAnimationFrame(ballCollisionPlayers)

}

function ballCollisionWindow () {

    let randomDistance = Math.random() * PLAYGROUND.clientHeight;

    if ( currentBallX <= 0 || currentBallX >= 1440 ) {

        directionX = -directionX

        currentBallX = PLAYGROUND.clientWidth / 2
        currentBallY = randomDistance
        
    }

    requestAnimationFrame(ballCollisionWindow)

}

/* SCORE */

let scoreOpponent = document.getElementById("score-player2")
let scorePlayer = document.getElementById("score-player1")

let scorePlayerValue = 0
let scoreOpponentValue = 0

function score () {

    if ( BALL.getBoundingClientRect().left <= 0 ) {

        
        scoreOpponentValue += 1
        console.log(scoreOpponentValue)
        scoreOpponent.innerHTML = scoreOpponentValue

    }

    if ( BALL.getBoundingClientRect().right >= 1440) {

        scorePlayerValue += 1
        scorePlayer.innerHTML = scorePlayerValue

    }

}

function gameLoop () {

    score()
    requestAnimationFrame(gameLoop)

}