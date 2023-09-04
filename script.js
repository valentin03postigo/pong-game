document.body.addEventListener( 'keydown' , function(e){

    const START = document.getElementById('start')

    if ( e.key === ' ') {

        START.textContent = ""

        ballMove()

        moveOpponent()

    }

})
/* PLAYER MOVEMENT */

const PLAYER = document.getElementById('player1')

let playerY = document.body.clientHeight / 2
let currentPlayerY = parseFloat(getComputedStyle(PLAYER).top)
let currentPlayerX = parseFloat(getComputedStyle(PLAYER).left)

const PLAYGROUND = document.getElementById("playground")
const MAX_TOP = 1.5 + "px"

console.log(MAX_TOP)

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
    console.log(PLAYER.style.top)
}

document.body.addEventListener ( 'keydown' , (e) => {

    if ( e.key === "ArrowUp") {

        console.log('arrowUp')
        movePlayer("up")

    } else if ( e.key === "ArrowDown") {

        console.log(PLAYER.getBoundingClientRect())
        console.log(PLAYGROUND.clientHeight)
        movePlayer("down")

    }

})

/* OPPONENT MOVEMENT */

const OPPONENT = document.getElementById("opponent")
let currentOpponentY = parseFloat(getComputedStyle(OPPONENT).top)
let currentOpponentX = parseFloat(getComputedStyle(OPPONENT).left)

function moveOpponent () {

    OPPONENT.style.top = (currentBallY - 4) + "px"

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

    if ( BALL.getBoundingClientRect().left === OPPONENT.getBoundingClientRect().left && 
    BALL.getBoundingClientRect().top == OPPONENT.getBoundingClientRect().top ) {

        directionX = -directionX
        console.log('funciona')
    }

    let randomDistance = Math.random() * PLAYGROUND.clientHeight;

    if ( currentBallX <= 0 || currentBallX >= 1440 ) {

        directionX = -directionX

        currentBallX = PLAYGROUND.clientWidth / 2
        currentBallY = randomDistance
        
    }

    currentBallX += 5 * directionX
    BALL.style.left = currentBallX + "px"

    if ( currentBallY <= 0 || currentBallY >= PLAYGROUND.clientHeight ) {

        directionY = -directionY

    }

    currentBallY += directionY * 5
    BALL.style.top = currentBallY + "px"
        
        requestAnimationFrame(ballMove)
    
}
