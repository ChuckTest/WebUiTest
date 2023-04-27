const GRID_SIZE = 4;
const EMPTY_TILE = 0;

// Initialize grid
let grid = [];
// for (let i = 0; i < GRID_SIZE; i++) {
//   grid[i] = [];
//   for (let j = 0; j < GRID_SIZE; j++) {
//     grid[i][j] = EMPTY_TILE;
//   }
// }

// // Add initial tiles to grid
// addRandomTile();
// addRandomTile();

// Render grid
function renderGrid() {
  let gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  for (let i = 0; i < GRID_SIZE; i++) {
    let rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let j = 0; j < GRID_SIZE; j++) {
      let tileElement = document.createElement("div");
      tileElement.classList.add("tile");
      tileElement.innerHTML = grid[i][j] === EMPTY_TILE ? "" : grid[i][j];
      tileElement.style.backgroundColor = getTileColor(grid[i][j]);
      rowElement.appendChild(tileElement);
    }

    gridElement.appendChild(rowElement);
  }
}

// Get tile color based on value
function getTileColor(value) {
  switch (value) {
    case 2:
      return "#eee4da";
    case 4:
      return "#ede0c8";
    case 8:
      return "#f2b179";
    case 16:
      return "#f59563";
    case 32:
      return "#f67c5f";
    case 64:
      return "#f65e3b";
    case 128:
      return "#edcf72";
    case 256:
      return "#edcc61";
    case 512:
      return "#edc850";
    case 1024:
      return "#edc53f";
    case 2048:
      return "#edc22e";
    default:
      return "#eee";
  }
}

// Add a new tile to the grid
function addRandomTile() {
  let row, col;
  do {
    row = Math.floor(Math.random() * GRID_SIZE);
    col = Math.floor(Math.random() * GRID_SIZE);
  } while (grid[row][col] !== EMPTY_TILE);

  grid[row][col] = Math.random() < 0.9 ? 2 : 4;
}

// Move tiles in a given direction
function move(direction) {
  let moved = false;

  switch (direction) {
    case "left":
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 1; j < GRID_SIZE; j++) {
          if (grid[i][j
          ] !== EMPTY_TILE) {
            let k = j;
            while (k > 0 && grid[i][k - 1] === EMPTY_TILE) {
              k--;
            }
            if (k !== j) {
              grid[i][k] = grid[i][j];
              grid[i][j] = EMPTY_TILE;
              moved = true;
            } else if (grid[i][k - 1] === grid[i][j]) {
              grid[i][k - 1] *= 2;
              grid[i][j] = EMPTY_TILE;
              moved = true;
            }
          }
        }
      }
      break;

    case "right":
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = GRID_SIZE - 2; j >= 0; j--) {
          if (grid[i][j] !== EMPTY_TILE) {
            let k = j;
            while (k < GRID_SIZE - 1 && grid[i][k + 1] === EMPTY_TILE) {
              k++;
            }
            if (k !== j) {
              grid[i][k] = grid[i][j];
              grid[i][j] = EMPTY_TILE;
              moved = true;
            } else if (grid[i][k + 1] === grid[i][j]) {
              grid[i][k + 1] *= 2;
              grid[i][j] = EMPTY_TILE;
              moved = true;
            }
          }
        }
      }
      break;

    case "up":
      for (let j = 0; j < GRID_SIZE; j++) {
        for (let i = 1; i < GRID_SIZE; i++) {
          if (grid[i][j] !== EMPTY_TILE) {
            let k = i;
            while (k > 0 && grid[k - 1][j] === EMPTY_TILE) {
              k--;
            }
            if (k !== i) {
              grid[k][j] = grid[i][j];
              grid[i][j] = EMPTY_TILE;
              moved = true;
            } else if (grid[k - 1][j] === grid[i][j]) {
              grid[k - 1][j] *= 2;
              grid[i][j] = EMPTY_TILE;
              moved = true;
            }
          }
        }
      }
      break;

    case "down":
      for (let j = 0; j < GRID_SIZE; j++) {
        for (let i = GRID_SIZE - 2; i >= 0; i--) {
          if (grid[i][j] !== EMPTY_TILE) {
            let k = i;
            while (k < GRID_SIZE - 1 && grid[k + 1][j] === EMPTY_TILE) {
              k++;
            }
            if (k !== i) {
              grid[k][j] = grid[i][j];
              grid[i][j] = EMPTY_TILE;
              moved = true;
            } else if (grid[k + 1][j] === grid[i][j]) {
              grid[k + 1][j] *= 2;
              grid[i][j] = EMPTY_TILE;
              moved = true;
            }
          }
        }
      }
      break;
  }

  if (moved) {
    addRandomTile();
    renderGrid();
  }
}

// Handle keypress events
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      move("left");
      break;
    case "ArrowRight":
      move("right");
      break;
    case "ArrowUp":
      move("up");
      break;
    case "ArrowDown":
      move("down");
      break;
  }
});

// Initialize the game
function init() {
  score = 0;
  grid = new Array(GRID_SIZE);
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = new Array(GRID_SIZE).fill(EMPTY_TILE);
  }
  addRandomTile();
  addRandomTile();
  renderGrid();
}

init(); // Start the game    