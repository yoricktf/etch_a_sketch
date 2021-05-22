for(x=0; x<256;x++) {
    const cell = document.createElement('div');
    cell.className = "cells";
    
    document.getElementById('container').appendChild(cell);
}

document.addEventListener("mouseenter", function (event){
const toFill = document.getElementsByClassName("cells");
toFill.className += ' red';
});



