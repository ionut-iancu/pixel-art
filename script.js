const sizePicker = document.querySelector('.size-picker');
const pixelCanvas = document.querySelector('.pixel-canvas');

function makeGrid() {
  let gridHeight = document.querySelector('.input-height').value;
  let gridWidth = document.querySelector('.input-width').value;

  // If grid already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  // Creates rows and cells
  for (let i = 0; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 0; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      
      // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('.color-picker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

makeGrid();

// Upon user's submitting height and width selections, callback function (inside method) calls makeGrid function. But event method preventDefault() first intercepts the 'submit' event, which would normally submit the form and refresh the page, preventing makeGrid() from being processed
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});
