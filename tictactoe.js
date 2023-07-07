// Run setup after page had loaded
window.addEventListener("load", setup);

function setup() {
    Board.addBoard();
    Board.addListeners();
}

//gameBoard Module

const Board = (() => {
    
    let gameBoard = [['','',''],
                     ['','',''],
                     ['','','']];

    let tiles = document.getElementsByClassName("boardTile");

    const addBoard = () => {
        let x = 0; 

        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                tiles[x].innerHTML = gameBoard[i][j];
                x++
            }
        }
    }

    const updateArray = () => {
        let x = 0;
        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                gameBoard[i][j] = tiles[x].innerHTML;
                x++
            }
        }

    }

    const addListeners = () => {
        for(let i=0;i<tiles.length;i++){
            tiles[i].addEventListener("click", Play.play)
        }
    }   

    // const play = (event) => {

    //     let val = event.srcElement.innerHTML;
    //     console.log(event.srcElement.innerHTML)

    //     if(val===''){ //&& player === 1
    //         event.srcElement.innerHTML='X'
    //         updateArray();
    //         console.log(gameBoard)
    //     }
    // };
    return {
        addBoard,
        updateArray,
        gameBoard,
        addListeners,
        tiles
    };
})();

// gameModule

const Play = (() => {
     let marker0 = '0';
     let marker1= 'X';
     let turn = 0;
     let tiles = Board.tiles

     const play = (event) => {
        let val = event.srcElement.innerHTML;
        console.log(event.srcElement.innerHTML)
        if(turn===0 && val===''){
            event.srcElement.innerHTML='0';
            turn++
            updateArray()
        }
        else if(turn===1 && val===''){
            event.srcElement.innerHTML='X';
            turn--;
        }
        else{
            console.log("you can't go here")
        }

        checkWin();
    };

    const updateArray = () => {
        let x = 0;
        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                Board.gameBoard[i][j] = tiles[x].innerHTML;
                x++
            }
        }

    }

    const checkWin = (gameBoard) => {

        let x = ''
        let y = ''
        let counter = 0;
    
        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                x = gameBoard[i][j]
                y = gameBoard[i][j+1]
    
                if(x!=y){
                    counter=0
                }
                if(x==y && counter==0){
                    counter++;
                }
                if(x==y && counter==1){
                    console.log("Winner")
                    //break
                }
            }
        }
        if (gameBoard[0][0]== gameBoard[0][1]== gameBoard[0][2]){
            console.log("Win")
        }
        if (gameBoard[0][0]== gameBoard[0][1]== gameBoard[0][2]){
            console.log("Win")
        }
    }


    return {play}
}
)();

// Player Factory creating two players

// const playerFactory = (name, marker) => {
//     return {name,marker}
// }

// const player1 = playerFactory('Player 0', '0')
// const player2 = playerFactory('Player 1', 'X')


// driver
// gameBoard.addBoard();
// game.addListeners();

