'use strict';


var MyMorpionXO =   {

    aiPlayer : 'O',
    huPlayer : 'X',
    cells : document.querySelectorAll('.cell'),
    origBoard:'',
    winCombos : [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2]
    ],

  startGame : function() {
    for (var i = 0; i < this.cells.length; i++) {


      this.cells[i].setAttribute('cell-id', i);
    }
    // console.log(this.cells.length);
    document.querySelector('.endgame').style.display = "none";
    this.origBoard = Array.from(Array(9).keys());
    console.log("origBoard");
    console.log(this.origBoard);

    // this.cells = document.querySelectorAll('.cell');
    for(var j = 0 ; j < this.cells.length; j+=1){
      this.cells[j].innerText = '';
      this.cells[j].style.removeProperty('background-color');
      this.cells[j].addEventListener('click', function () {
        MyMorpionXO.turnClick(event.target);
      }, false);
    }
  },

  turnClick : function (cell) {
    // var cellID = cell.target.getAttribute('cell-id');
    // console.log(MyMorpionXO.huPlayer + cell);
    if(typeof (cell.getAttribute('cell-id')) != "number") {
      MyMorpionXO.turn(cell.getAttribute('cell-id'), this.huPlayer);
      if(!MyMorpionXO.checkTie()){
        MyMorpionXO.turn(MyMorpionXO.bestSpot(), MyMorpionXO.aiPlayer);
      }
    }
  },

  turn : function (cellID, player){
    // var cellNb = parseInt(cellID);
    // console.log(cellNb);
    // console.log(MyMorpionXO.origBoard[cellNb]);
    MyMorpionXO.cells[cellID].innerText = player;
    var gameWon = this.checkWin(this.origBoard,player);
    if (gameWon){
      MyMorpionXO.gameOver(gameWon);
    }
    // console.log(cells[cellNb]);
    // cells[cellNb].innerText = player;
  },

  checkWin: function (board, player) {
    var plays = board.reduce((a, e, i) =>
      (e === player) ? a.concat(i) : a, []);

    var gameWon = null;
    for (var [index, win] of MyMorpionXO.winCombos.entries()) {
      if (win.every(elem => plays.indexOf(elem) > -1)) {
        gameWon = {index: index, player: player};
        break;
      }
    }
    return gameWon;
  },

  gameOver: function() {
      for (var index of MyMorpionXO.winCombos[MyMorpionXO.checkWin.index]) {
        MyMorpionXO.cells[index].style.backgroundColor =
          MyMorpionXO.checkWin.player === MyMorpionXO.huPlayer ? "blue" : "red";
      }
      for (var i = 0; i < MyMorpionXO.cells.length; i++) {
        MyMorpionXO.cells[i].removeEventListener("click", MyMorpionXO.turnClick, false)
      }
      var victory;
      if (MyMorpionXO.checkWin().player == MyMorpionXO.huPlayer) {
        victory = "Vous avez gagné!";
      } else{
        victory = "Vous avez perdu.";
      }
      MyMorpionXO.declareWinner(victory);
  },

  declareWinner: function (victory) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = victory;

  },

  emptySquares: function() {
    MyMorpionXO.origBoard.filter( function (el) {
      if( typeof el == "number") {
        return el;
      }
    })
  },
  
  bestSpot : function () {
    return MyMorpionXO.emptySquares()[0];
  },

  checkTie: function () {
    if (MyMorpionXO.emptySquares() == 0) {
      for( var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "green";
        cells[i].removeEventListener("click", MyMorpionXO.turnClick(), false);
      }
      MyMorpionXO.declareWinner("Carte remplie");
      return true;
    }
    return false;
  },

};

