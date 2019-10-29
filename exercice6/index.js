'use strict';

var notes = [10, 13, 13, 12, 15, 12, 11, 16, 14];

function computeAverage(item) {
  return ((item.reduce((a, b) => a + b, 0)) / item.length)
}
function showContent(item){
  var elem = document.createElement('div');
  elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.6;z-index:100; margin-left:10%;';
  elem.innerHTML = "<h1>Calcul de la moyenne des notes</h1><br><br><h2>Les notes</h2><br>"+
    item.toString()+"<br><h2>Il y a </h2>"+ item.length + " notes au total<br>"+
    "Ce qui donne une moyenne de " + computeAverage(item);
  document.body.appendChild(elem);
};
showContent(notes);
