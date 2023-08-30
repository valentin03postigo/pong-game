document.body.addEventListener( 'keydown' , function(){

    const START = document.getElementById('start')

    START.textContent = ""

})

const GAME_AREA = document.getElementById('playground') 
const PLAYER1 = document.getElementById('player1')

let playerY = GAME_AREA.clientHeight / 2

function player1Movement () {

    GAME_AREA.addEventListener( 'keydown' , (e) => {

        console.log(e)

        if ( e.key === 'ArrowUp') {

            console.log('cad')
        }

    })

    PLAYER1.style.top = playerY + 'px';

}

player1Movement()
