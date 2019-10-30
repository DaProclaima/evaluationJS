'use strict';

function renderWorldMap(){

    document.cookie = "SameSite=Lax";

    document.body.style.cssText= "position:absolute; width:100%; height:100%;margin:0;padding:0;";

    var obj = document.createElement("object");
    obj.setAttribute("type", "image/svg+xml");
    obj.setAttribute("data", "./assets/World_map_-_low_resolution.svg");
    obj.style.cssText=
      'width: 100%;' +
      'height: 100%;' +
      '  margin: 25px auto;'

    // console.log(obj);
    var nav = document.createElement('nav');
    nav.innerHTML= "<h3>Country: </h3>";
      nav.style.cssText =
      'color:black' +
      'font-weight: bold'+
      'width: 100px;' +
      'height: 100px;' +
      'position:fixed';
    document.body.appendChild(nav);
    document.body.appendChild(obj);


    obj.onload = function() {
        var svg = document.querySelector("#svg2");
        var svgT = obj.contentDocument.querySelector('svg');
        var paths = obj.contentDocument.querySelectorAll('svg path');

        // console.log(svg);
        // console.log(svgT);
        // console.log(paths);
        paths.forEach(function(path) {
            path.isClicked = false;
            path.addEventListener('click', function() {
                colorRed(path);
                getCountryName(path);
            });

            path.addEventListener('mouseover', function () {
                path.style.fill = 'blue';
            });

            path.addEventListener('mouseout', function(){
                if (path.isClicked) {
                    path.style.fill = "red";
                } else {
                    path.style.fill = "";
                }
            });
        });
    }

  }
function colorRed(path) {
    path.style.fill = "red";
    return path.isClicked = true;
}
function getCountryName(path) {
    path.getAttribute("id");
    document.querySelector("nav").querySelector("h3").innerHTML=
      "Country: "+path.getAttribute("id");
};

renderWorldMap();