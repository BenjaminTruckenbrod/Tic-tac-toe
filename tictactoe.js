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
        addListeners(tiles);
    }

    const addListeners = (t) => {
        for(let i=0;i<t.length;i++){
            t[i].addEventListener("click", play)
        }
    }   

    const play = (event) => {
        //console.log("PLAY")
        let val = event.srcElement.innerHTML;
        console.log(event.srcElement.innerHTML)
        // console.log(play.target)
        if(val===''){ //&& player === 1
            event.srcElement.innerHTML='X'
        }
    };
    return {
        addBoard
    };
})();


gameBoard.addBoard();

  // make game board
  // click on tile
    // if tile is a 0, change tile to x
        //target.value
