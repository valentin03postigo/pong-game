document.body.addEventListener( 'keydown' , function(){

    const START = document.getElementById('start')

    START.textContent = ""

})
/* PLAYER MOVEMENT */

const PLAYER = document.getElementById('player1')

let playerY = document.body.clientHeight / 2
let currentPlayerY = parseFloat(getComputedStyle(PLAYER).top)

const PLAYGROUND = document.getElementById("playground")

console.log(PLAYGROUND.clientHeight)

function movePlayer (direction) {

    if ( direction === "up" ) {

        playerY -= 15

    } else if ( direction === "down") {

        playerY += 15

    }

    PLAYER.style.top = playerY + "px"

}

document.body.addEventListener ( 'keydown' , (e) => {

    if ( e.key === "ArrowUp") {

        console.log('arrowUp')
        movePlayer("up")

    } else if ( e.key === "ArrowDown" && currentPlayerY < 783) {

        console.log('arrowDown')
        movePlayer("down")

    }

})

/* OPPONENT MOVEMENT */


/* BALL MOVEMENT */

const BALL = document.getElementById("ball")
let currentBallX = parseFloat(getComputedStyle(BALL).left)
let currentBallY = parseFloat(getComputedStyle(BALL).top)

let ballX = document.body.clientWidth / 2

const directionY = -1
const directionX = 1

function ballMove () {

    currentBallX -= 10
    BALL.style.left = currentBallX + "px"

    let randomDistance = Math.random() * 10;
    
    currentBallY += randomDistance * direction
    BALL.style.top = currentBallX + "px"


    requestAnimationFrame(ballMove)

}

ballMove()


