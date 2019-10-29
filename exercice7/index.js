'use strict';

var phoneNumLs = ["0666513288", "0166513288", "0766513288", "0566513288", "0266513288", "0366513288", "0966513288"];

function checkPhoneNumber(item) {
  // this regex checks if a number has "06", "07" or "01" as prefix
  var prefix = new RegExp("^0(1|6|7)[0-9]{8}$");
  return prefix.test(item);

}
function showContent(item){
  var elem = document.createElement('div');
  elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.6;z-index:100; margin-left:10%;';
  elem.innerHTML = "<h1>Check if a phone number starts with \"06\", \"07\" or \"01\" as prefix</h1><br><br>" +
    "<h2>List of numbers</h2><br>"+
    item.toString()+"<br><h2>Each number having true at its right means it is relevant</h2>";
  for( var k = 0; k < item.length; k++) {
    elem.innerHTML += item[k] + " : " + checkPhoneNumber((item[k]))+"<br>";
  }
  document.body.appendChild(elem);
};
showContent(phoneNumLs);
