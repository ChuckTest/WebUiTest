
$(document).ready(function () {
    // create the game grid
    //It looks like you're creating a 4 by 4 grid of div elements with the class square. Each square will have an id attribute in the format of square-row-column. For example, the top left square will have an id of square-0-0, the square to its right will have an id of square-0-1, and so on.
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            let square = $('<div>').addClass('square').attr('id', 'square-' + row + '-' + col);
            $('#grid').append(square);
        }
    }

    // generate two new tiles when the game starts
    generateTile();
    generateTile();

    // handle player moves
$(document).on('keydown', function(event) {
    // check which key was pressed
    switch (event.which) {
      // left arrow
      case 37:
        moveTiles('left');
        break;
      // up arrow
      case 38:
        // slide tiles upwards and merge matching pairs
        moveTiles('up');
        break;
      // right arrow
      case 39:
        // slide tiles to the right and merge matching pairs
        moveTiles('right');
        break;
      // down arrow
      case 40:
        // slide tiles downwards and merge matching pairs
        moveTiles('down');
        break;
    }
  });
});

function generateTile() {
    // get a list of empty squares on the grid
    let emptySquares = $('.square').filter(function () {
        return $(this).text() === '';
    });

    // if there are no empty squares, do nothing
    if (emptySquares.length === 0) {
        return;
    }

    // select a random empty square
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    let randomSquare = emptySquares.eq(randomIndex);

    // set the value of the square to either 2 or 4
    randomSquare.text(Math.random() < 0.9 ? 2 : 4);
}


function moveTiles(direction) {
    switch (direction) {
      // left
      case 'left':
      moveLeft();
        break;
      // up
      case 'up':
        // slide tiles upwards and merge matching pairs
        // code goes here
        break;
      // right
      case 'right':
        // slide tiles to the right and merge matching pairs
        // code goes here
        break;
      // down
      case 'down':
        // slide tiles downwards and merge matching pairs
        // code goes here
        break;
    }
    generateTile();
  }

  function moveLeft() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          let currentSquare = $('#square-' + row + '-' + col);
          let leftSquare = $('#square-' + row + '-' + (col - 1));
      
          if (leftSquare.is(':empty')) {
            leftSquare.text(currentSquare.text());
            currentSquare.text('');
            // Move the number to the left square and recurse the move logic
            moveLeft();
          } else if (leftSquare.text() === currentSquare.text()) {
            leftSquare.text(parseInt(leftSquare.text()) * 2);
            currentSquare.text('');
          }
        }
      }
  }
  
  