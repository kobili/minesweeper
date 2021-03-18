"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Minefield = /** @class */ (function () {
    /**
     * A minefield is a grid of squares
     * @param height the number of rows in the grid
     * @param width the number of columns in the grid
     * @param numMines the number of mines in the grid
     */
    function Minefield(height, width, numMines) {
        this.height = height;
        this.width = width;
        this.numMines = numMines;
        this.field = new Array(height);
        for (var i = 0; i < height; i++) {
            this.field[i] = new Array(width);
        }
    }
    /**
     * Creates the MineField
     **/
    Minefield.prototype.generateField = function () {
        this.intializeField();
        this.initializeMines();
        this.initializeSquares();
    };
    /**
     * Fills the field with null values in the shape (height, width)
     */
    Minefield.prototype.intializeField = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                this.field[i][j] = "_";
            }
        }
    };
    /**
     * Populates the field with numMines mines randomly scattered around
     */
    Minefield.prototype.initializeMines = function () {
        var m = this.numMines;
        while (m != 0) {
            var x = this.randomIntegerBetween(0, this.width);
            var y = this.randomIntegerBetween(0, this.height);
            if (this.field[x][y] === "*") {
                // this grid space is already occupied by a mine
                continue;
            }
            this.field[x][y] = "*";
            m--;
        }
    };
    /**
     * For each square, record the number of mines that are adjacent to it
     */
    Minefield.prototype.initializeSquares = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                if (this.field[i][j] === "*") {
                    continue;
                }
                var numAdjacents = 0; // the number of adjacent mines
                var left = j - 1;
                var right = j + 1;
                var down = i + 1;
                var up = i - 1;
                if (left > 0) { // left
                    if (this.field[i][left] === "*") {
                        numAdjacents++;
                    }
                }
                if (left > 0 && up > 0) { // upper left
                    if (this.field[up][left] === "*") {
                        numAdjacents++;
                    }
                }
                if (up > 0) { // up
                    if (this.field[up][j] === "*") {
                        numAdjacents++;
                    }
                }
                if (up > 0 && right < this.width) { // upper-right
                    if (this.field[up][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (right < this.width) { // right
                    if (this.field[i][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && right < this.width) { // lower-right
                    if (this.field[down][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height) { // down
                    if (this.field[down][j] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && left > 0) { // lower-left
                    if (this.field[down][left] === "*") {
                        numAdjacents++;
                    }
                }
                this.field[i][j] = numAdjacents.toString();
            }
        }
    };
    /**
     * @param min : the random integer is greater than or equal to min
     * @param max : the random integer is smaller than max
     * @returns : random integer in the range [min, max)
     */
    Minefield.prototype.randomIntegerBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    Minefield.prototype.test = function () {
        this.generateField();
        console.log(this.field);
    };
    return Minefield;
}());
exports.default = Minefield;
