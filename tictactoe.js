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

        let resetButton = document.getElementById("reset-button");
        resetButton.addEventListener("click", reset);
    }
    
    const reset = () =>{

        gameBoard = [['','',''],
                    ['','',''],
                    ['','','']];
        Play.turnReset();
        let displayWin= document.getElementById("winnerDisplayId")
        if (displayWin!=null){
        document.getElementById("winnerDisplayId").remove();
        }

        let displayTie= document.getElementById("tieDisplayId")
        if (displayTie!=null){
        document.getElementById("tieDisplayId").remove();
        }
        setup();
    }

    return {
        addBoard,
        updateArray,
        gameBoard,
        addListeners,
        tiles,
        //reset
    };
})();

// the game flow Module

const Play = (() => {
     let marker0 = '0';
     let marker1= 'X';
     let turn = 0;
     let tiles = Board.tiles
     let b = Board.gameBoard

     const play = (event) => {
        let val = event.srcElement.innerHTML;
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

        if(!checkWin()){
        checkTie();
        }
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

    const removeListeners = () => {
        for(let i=0;i<tiles.length;i++){
            tiles[i].removeEventListener("click", Play.play)
        }
    }

    const displayWin = () => {
        let winnerDisplay = document.createElement("div");
        winnerDisplay.id=('winnerDisplayId');
        winnerDisplay.className=('alert');
        if(turn==1){
            winnerDisplay.innerHTML=("Player 1 Wins!");
        }
        if(turn==0){
            winnerDisplay.innerHTML=("Player 2 Wins!");
        }
        document.body.appendChild(winnerDisplay);
        removeListeners();
        }

    const displayTie = () => {
        let tieDisplay = document.createElement("div");
        tieDisplay.id=('tieDisplayId');
        tieDisplay.className=('alert');
        tieDisplay.innerHTML=("Its a Tie!");
        document.body.appendChild(tieDisplay);
        removeListeners();
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
                    displayWin();
                    return true;
                }
            }

        }

        for(let j=0; j<3; j++){
            let i=0
            let x=b[i][j]
            if(x=="0" || x=='X'){
                if(x==b[i+1][j] && x==b[i+2][j]){
                    displayWin();
                    return true;
                }
            }

        }
        for(let q=0; q<1; q++){
            let i=0
            let j=0
            let x=b[i][j]
            if(x=="0" || x=='X'){

                if (x==b[i+1][j+1] && x==b[i+2][j+2]){
                    displayWin();
                    return true;
                }
            }
        }

        for(let q=0; q<1; q++){
            let i=0
            let j=2
            let x=b[i][j]
            if(x=="0" || x=='X'){
                if (x==b[i+1][j-1] && x==b[i+2][j-2]){
                    displayWin();
                    return true;
            }

            }   
        }
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
            displayTie();
            console.log("it's a tie")
        }

    }

    const turnReset = () => turn = 0;


    return {play, turnReset}
}
)();
