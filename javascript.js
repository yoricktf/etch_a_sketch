for(x=0; x<256;x++) {
    const cell = document.createElement('div');
    cell.className = "cells";
    cell.addEventListener

    document.getElementById('board').appendChild(cell);

    cell.addEventListener('mouseenter', function (event) {
        console.log('entered a cell');
        cell.className += " red"
      });
}



