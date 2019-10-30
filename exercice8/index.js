'use strict';

var matrice = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function checkDamages(cell){

  if(cell.boat !== 0) {
    cell.style.backgroundColor="red";
  } else {
    cell.style.backgroundColor="blue";
  }
  cell.removeEventListener('onclick', onclick);
}

function showContent() {
  var elem = document.createElement('div');
  var table = document.createElement('table');
  for (var i =0; i < matrice.length; i =+1) {
    var row = document.createElement('tr');

    for (var j = 0; j < matrice[i].length; j =+1){
      var cell = document.createElement('td');
      cell.boat = matrice[i][j];
      cell.addEventListener('click', checkDamages(cell), false);
    }
  }
  row.append(cell);
  table.append(row);
  elem.appendChild(table);
  document.body.appendChild(elem);

}

showContent();
