'use strict';
var stringsList = ["ici", "radar", "kayak","été", "aviva", "Paris", "Versailles"];

function showContent(item){
  var elem = document.createElement('div');
  elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.6;z-index:100; margin-left:10%;';
  elem.innerHTML = "<h1>Check if some French words are palindromes</h1><br><br><h2>The words</h2><br><h3>" +
    item.toString()+"</h3><br><h2>Let us check them one by one. If true is displayed at right from the word,"+
    " then the word is a palindrome</h2><br>";

  for( var k = 0; k < item.length; k++) {
    elem.innerHTML += item[k].toString() + " : " + isPalindrome(item[k].toString())+"<br>";
  }
  document.body.appendChild(elem);
}

function isPalindrome(input){
  for(var i = 0; i < input.length; i++){
    if (input[i] != input[(input.length - 1) - i]){
      return false;
    }
    return true;
  }
}


showContent(stringsList);