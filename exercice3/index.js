'use strict';


var MyMorpionXO =   {

    aiPlayer : 'O',
    cells : document.querySelectorAll('.cell'),
    huPlayer : 'X',
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

      var cellID = i;
      cellID = cellID.toString();
      this.cells[i].setAttribute('cell-id', cellID);
    }
    console.log(this.cells.length);
    document.querySelector('.endgame').style.display = "none";
    this.origBoard = Array.from(Array(9).keys());
    console.log(this.origBoard);

    // this.cells = document.querySelectorAll('.cell');
    for(var j = 0 ; j < this.cells.length; j+=1){
      this.cells[j].innerText = '';
      this.cells[j].style.removeProperty('background-color');
      this.cells[j].addEventListener('click', MyMorpionXO.turnClick, false);
    }
  },

  turnClick : function (cell) {
    // var cellID = cell.target.getAttribute('cell-id');
    // console.log(MyMorpionXO.huPlayer + cell);
    MyMorpionXO.turn(cell.target.getAttribute('cell-id'),MyMorpionXO.huPlayer);
  },

  turn : function (cellID, player){
    var cellNb = parseInt(cellID);
    // console.log(cellNb);
    // console.log(MyMorpionXO.origBoard[cellNb]);
    var cells = document.querySelectorAll('.cell')[cellNb].innerText = player;
    // console.log(cells[cellNb]);
    // cells[cellNb].innerText = player;
// console.log()
  }


};

