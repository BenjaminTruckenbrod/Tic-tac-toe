//gameModule

const game = (() => {
     let marker0 = '0';
     let marker1= 'X';
     let turn = 0;
     let tiles = document.getElementsByClassName("boardTile");

     const addListeners = () => {
        for(let i=0;i<tiles.length;i++){
            tiles[i].addEventListener("click", play)
        }
    }  

     const play = (event) => {
        //console.log("PLAY")
        let val = event.srcElement.innerHTML;
        console.log(event.srcElement.innerHTML)
        // console.log(play.target)
        if(turn===0 && val===''){
            event.srcElement.innerHTML='0';
            turn++
        }
        else if(turn===1 && val===''){
            event.srcElement.innerHTML='X';
            turn--;
        }
        else{
            console.log("you can go here")
        }
    };

    addListeners();

    return {addListeners}
}
)();

//gameBoard Module

const gameBoard = (() => {
    
    let gameBoard = [['','',''],
                     ['','',''],
                     ['','','']];

    const addBoard = () => {
        let tiles = document.getElementsByClassName("boardTile")

        let x = 0; 

        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                tiles[x].innerHTML = gameBoard[i][j];
                x++
            }
        }
        // addListeners(tiles);
    }

    // const addListeners = (t) => {
    //     for(let i=0;i<t.length;i++){
    //         t[i].addEventListener("click", play)
    //     }
    // }   

    // const play = (event) => {
    //     //console.log("PLAY")
    //     let val = event.srcElement.innerHTML;
    //     console.log(event.srcElement.innerHTML)
    //     // console.log(play.target)
    //     if(val===''){ //&& player === 1
    //         event.srcElement.innerHTML='X'
    //     }
    // };
    return {
        addBoard
        // addListeners
    };
})();

// Player Factory creating two players

const playerFactory = (name, marker) => {
    return {name,marker}
}

const player1 = playerFactory('Player 0', '0')
const player2 = playerFactory('Player 1', 'X')


// driver

gameBoard.addBoard();
game.addListeners();

  // make game board
  // click on tile
    // if tile is a 0, change tile to x
        //target.value
