const width = 20;
const height = 20;

const numberOfRows = 25;
const numberOfColumns = 25;
let numberOfEras;

var board = new Array(numberOfRows);

window.addEventListener('load', function () {

});

function drawBoard() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const birthThresHold = document.getElementById("birth-value").innerHTML;
    const survivalThresHold = document.getElementById("survival-value").innerHTML;

    for (var i = 0; i < numberOfRows; i++) {
        board[i] = new Array(numberOfColumns);

        var currentLine = board[i];

        for (var j = 0; j < numberOfColumns; j++) {

            var randomNumber = randomIntFromInterval(0, 10);

            var chanceToBeAlive = document.getElementById("chance-value").innerHTML * 10;

            var cellAlive = randomNumber > chanceToBeAlive ? 0 : 1;

            var cell = new Cell(birthThresHold, survivalThresHold);
            cell.status = cellAlive;

            currentLine[j] = cell;

            var color = cell.status == 0 ? "black" : "white";
            ctx.fillStyle = color;
            ctx.fillRect(j * width, i * height, width, height);
        }
    }

    for (var i = 0; i < numberOfRows; i++) {
        for (var j = 0; j < numberOfColumns; j++) {

            var cell = board[i][j];

            // First row
            if (i === 0) {
                // First cell
                if (j === 0) {
                    cell.neighbors.push(board[0][1]);
                    cell.neighbors.push(board[1][0]);
                    cell.neighbors.push(board[1][1]);
                }
                // Last cell
                else if (j === numberOfColumns - 1) {
                    cell.neighbors.push(board[i + 1][j]);
                    cell.neighbors.push(board[i][j - 1]);
                    cell.neighbors.push(board[i + 1][j - 1]);
                }
                else {
                    cell.neighbors.push(board[i + i][j]);
                    cell.neighbors.push(board[i][j - 1]);
                    cell.neighbors.push(board[i][j + 1]);
                    cell.neighbors.push(board[i + 1][j + 1]);
                    cell.neighbors.push(board[i + 1][j - 1]);
                }
            }
            // Last row
            else if (i === numberOfRows - 1) {
                // First cell
                if (j === 0) {
                    cell.neighbors.push(board[i - 1][j]);
                    cell.neighbors.push(board[i][j + 1]);
                    cell.neighbors.push(board[i - 1][j + 1]);
                }
                // Last cell
                else if (j === numberOfColumns - 1) {
                    cell.neighbors.push(board[i - 1][j]);
                    cell.neighbors.push(board[i][j - 1]);
                    cell.neighbors.push(board[i - 1][j - 1]);
                }
                else {
                    cell.neighbors.push(board[i - 1][j]);
                    cell.neighbors.push(board[i][j - 1]);
                    cell.neighbors.push(board[i][j + 1]);
                    cell.neighbors.push(board[i - 1][j - 1]);
                    cell.neighbors.push(board[i - 1][j + 1]);
                }
            }
            // First column
            else if (j === 0) {
                cell.neighbors.push(board[i - 1][j]);
                cell.neighbors.push(board[i][j + 1]);
                cell.neighbors.push(board[i + 1][j]);
                cell.neighbors.push(board[i - 1][j + 1]);
                cell.neighbors.push(board[i + 1][j + 1]);
            }
            // Last column
            else if (j === numberOfColumns - 1) {
                cell.neighbors.push(board[i - 1][j]);
                cell.neighbors.push(board[i][j - 1]);
                cell.neighbors.push(board[i + 1][j]);
                cell.neighbors.push(board[i - 1][j - 1]);
                cell.neighbors.push(board[i + 1][j - 1]);
            }
            // Middle cells
            else {
                cell.neighbors.push(board[i - 1][j]);
                cell.neighbors.push(board[i + 1][j]);

                cell.neighbors.push(board[i][j - 1]);
                cell.neighbors.push(board[i][j + 1]);

                cell.neighbors.push(board[i - 1][j - 1]);
                cell.neighbors.push(board[i - 1][j + 1]);

                cell.neighbors.push(board[i + 1][j - 1]);
                cell.neighbors.push(board[i + 1][j + 1]);
            }
        }
    }

    startGame();
}

var era = 0;

function startGame() {
    numberOfEras = document.getElementById("eras-value").innerHTML;
    
    setTimeout(function () {
        era++;
        if (era < numberOfEras) {
            run();
        }
    }, 500);
}

function run() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    for (var i = 0; i < numberOfRows; i++) {
        for (var j = 0; j < numberOfColumns; j++) {
            var cell = board[i][j];
            var cellState = cell.getState();
            var color = cellState == 0 ? "black" : "white";
            ctx.fillStyle = color;
            ctx.fillRect(j * width, i * height, width, height);
        }
    }

    console.log('End of era');
    startGame();
}