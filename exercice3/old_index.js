'use strict';

/**
 *
 * @constructor
 */
var MyMorpionXO = function MyMorpionXO() {

  this.aiPlayer = 'O';
  // noinspection BadExpressionStatementJS
  this.huPlayer = 'X';
  this.origBoard;
  this.winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2]
  ];

  this.cells = document.querySelectorAll('.cell');
// console.log(this.cells);


  for (var i = 0; i < this.cells.length; i++) {

    var cellID = i;
    cellID = cellID.toString();
    this.cells[i].setAttribute('cellID',  cellID);
  }
  console.log(this.cells.length);
};


MyMorpionXO.startGame = function startGame() {
  document.querySelector('.endgame').style.display = "none";
  this.origBoard = Array.from(Array(9).keys());
  console.log(this.origBoard);

  // TODO: I don t know why this.cells is not bound to class MyMorpionXO. Consequently, I needed to state it again below...
  this.cells = document.querySelectorAll('.cell');
  for(var i = 0 ; i < this.cells.length; i+=1){
    this.cells[i].innerText = '';
    this.cells[i].style.removeProperty('background-color');
    this.cells[i].addEventListener('click', this.turnClick, false);
  }
};

MyMorpionXO.turnClick = function turnClick (cell) {
  var cellID = cell.target.getAttribute('cellID');
  // console.log(this.huPlayer);
  // this.turn(cell.target.getAttribute('cellID'),this.huPlayer);
  // console.log(cell);
};

MyMorpionXO.turn = function (cellID, player){
  var cellNb = parseInt(cellID);
  // this.origBoard[cellNb];
  console.log(this.origBoard[cellNb])
  // document.querySelector('.cell').getAttribute('cellID');
// console.log()
};

var myMorpion = new MyMorpionXO();



