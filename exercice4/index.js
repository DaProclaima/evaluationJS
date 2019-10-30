'use strict';

function renderWorldMap(){
    var obj = document.createElement("object");
    // obj.setAttribute('src',"./assets/World_map_-_low_resolution.svg");
    obj.setAttribute('width','100%');
    obj.setAttribute('height','100%');
    obj.style.cssText= 'display: block;' +
      'background-color: black' +
      'width: 100%;' +
      'height: 100%;' +
      '  margin: 25px auto;\n' +
      '  border: 1px solid grey;\n' +
      '  stroke: #006600;' +
      'obj path:hover{fill: bleu;}';

    // This next line will just add it to the <body> tag
    document.body.appendChild(obj);
  }



renderWorldMap();