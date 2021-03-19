interface SquareInfo {
    label: String,
    isRevealed: boolean,
    xCoord: number,
    yCoord: number
}

class Minefield {
    height: number;
    width: number;
    numMines: number;
    field: Array< Array<SquareInfo> >;
    squaresRevealed: number = 0;        // the number of squares that have been revealed

    /**
     * A minefield is a grid of squares
     * @param height the number of rows in the grid
     * @param width the number of columns in the grid
     * @param numMines the number of mines in the grid
     */
    constructor(height: number, width: number, numMines: number) {
        this.height = height;
        this.width = width;
        this.numMines = numMines;

        this.field = new Array< Array<SquareInfo> >(height);
        for (let i = 0; i < height; i++) {
            this.field[i] = new Array<SquareInfo>(width);
        }
        
        this.generateField();
    }

    /**
     * Creates the MineField
     **/ 
    generateField() {
        this.intializeField();
        this.initializeMines();
        this.initializeSquares();
    }

    /**
     * Fills the field with null values in the shape (height, width)
     */
    intializeField() {

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.field[i][j] = {label: "_", isRevealed: false, xCoord: j, yCoord: i};
            }
        }
    }

    /**
     * Populates the field with numMines mines randomly scattered around
     */
    initializeMines() {
        let m: number = this.numMines;

        while (m !== 0) {
            let x: number = this.randomIntegerBetween(0, this.width);
            let y: number = this.randomIntegerBetween(0, this.height);

            if (this.field[y][x].label === "*") {
                // this grid space is already occupied by a mine
                continue;
            }

            this.field[y][x].label = "*";
            m--;
        }
    }

    /**
     * For each square, record the number of mines that are adjacent to it
     */ 
    initializeSquares() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.field[i][j].label === "*") {
                    continue;
                }

                let numAdjacents: number = 0;       // the number of adjacent mines

                let left: number = j - 1;
                let right: number = j + 1;
                let down: number = i + 1;
                let up: number = i - 1;

                if (left >= 0) {                         // left
                    if (this.field[i][left].label === "*") {
                        numAdjacents++;
                    }
                }
                if (left >= 0 && up >= 0) {               // upper left
                    if (this.field[up][left].label === "*") {
                        numAdjacents++;
                    }
                }
                if (up >= 0) {                           // up
                    if (this.field[up][j].label === "*") {
                        numAdjacents++;
                    }
                }
                if (up >= 0 && right < this.width) {    // upper-right
                    if (this.field[up][right].label === "*") {
                        numAdjacents++;
                    }
                }
                if (right < this.width) {               // right
                    if (this.field[i][right].label === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && right < this.width) { // lower-right
                    if (this.field[down][right].label === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height) {               // down
                    if (this.field[down][j].label === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && left >= 0) {           // lower-left
                    if (this.field[down][left].label === "*") {
                        numAdjacents++;
                    }
                }

                if (numAdjacents !== 0) {
                    this.field[i][j].label = numAdjacents.toString();
                } else {
                    this.field[i][j].label = "";
                }
                
                
            }
        }
    }

    revealSquare(xCoord: number, yCoord: number) {
        if (xCoord < 0 || xCoord >= this.width || yCoord <0 || yCoord >= this.height) {
            return;     // invalid coordinates
        }

        let currentSquare: SquareInfo = this.field[yCoord][xCoord];
        if (currentSquare.isRevealed) {
            return
        }
        if (currentSquare.label !== "") {
            // the current square is not empty
            currentSquare.isRevealed = true;
            this.squaresRevealed++;
            return;
        }

        // otherwise the current square is empty
        // recursively reveal all adjacent empty squares
        currentSquare.isRevealed = true;
        this.squaresRevealed++;
        this.revealSquare(xCoord-1, yCoord);
        this.revealSquare(xCoord, yCoord-1);
        this.revealSquare(xCoord+1, yCoord);
        this.revealSquare(xCoord, yCoord+1);
    }

    /**
     * @param min : the random integer is greater than or equal to min
     * @param max : the random integer is smaller than max
     * @returns : random integer in the range [min, max)
     */
    randomIntegerBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    copyMineField(source: Minefield) {
        this.height = source.height;
        this.width = source.width;
        this.numMines = source.numMines;
        this.field = source.field;
        this.squaresRevealed = source.squaresRevealed;
    }
}

export default Minefield;