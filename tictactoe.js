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

    return {
        addBoard,
        updateArray,
        gameBoard,
        addListeners,
        tiles
    };
})();

// Play the game Flow

const Play = (() => {
     let marker0 = '0';
     let marker1= 'X';
     let turn = 0;
     let tiles = Board.tiles
     let b = Board.gameBoard

     const play = (event) => {
        let val = event.srcElement.innerHTML;
        // console.log(event.srcElement.innerHTML)
        if(turn===0 && val===''){
            event.srcElement.innerHTML='0';
            turn++
            updateArray()
        }
        else if(turn===1 && val===''){
            event.srcElement.innerHTML='X';
            turn--;
            updateArray()
        }
        else{
            console.log("you can't go here")
        }

        checkWin();
        checkTie();
    };

    const updateArray = () => {
        let x = 0;
        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                b[i][j] = tiles[x].innerHTML;
                x++
            }
        }

    }

    const checkWin = () => {

        let x = ''
        // let y = ''
        let counter = 0;

        for(let i=0; i<3; i++){
            let j=0
            let x=b[i][j]
            if(x=="0" || x=='X'){
                if(x==b[i][j+1] && x==b[i][j+2]){
                    console.log("Winner")
                    break;
                }
            }

        }

        for(let j=0; j<3; j++){
            let i=0
            let x=b[i][j]
            if(x=="0" || x=='X'){
                if(x==b[i+1][j] && x==b[i+2][j]){
                    console.log("Winner")
                    break;
                }
            }

        }
        for(let q=0; q<1; q++){
        let i=0
        let j=0
        let x=b[i][j]
        if(x=="0" || x=='X'){

            if (x==b[i+1][j+1] && x==b[i+2][j+2]){
                console.log("Winner")
            }

        }
        }

        for(let q=0; q<1; q++){
            let i=0
            let j=2
            let x=b[i][j]
        if(x=="0" || x=='X'){
            if (x==b[i+1][j-1] && x==b[i+2][j-2]){
                console.log("Winner")
            }

        }
        }



        
        // loop1:
        //     for(let i=0; i<3; i++){
        // loop2:    
        //         for(let j=0; j<3; j++){
        //             let x=b[i][j]             
        //             if(x=="0" || x=='X'){
        //                 if(x==b[i][j+1] && x==b[i][j+2]){
        //                     console.log("Winner")
        //                     break;
        //                 }
        //                 if(x==b[i+1][j] && x==b[i+2][j]){
        //                     console.log("Winner")
        //                     break loop1;
        //                 }

        //             }
        //         }
        // }


        
    }

    const checkTie = () => {
        counter = 0

        for(let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (b[i][j]!==''){
                    counter++
                }
            }
        }
        if(counter==9){
            console.log("it's a tie")
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

