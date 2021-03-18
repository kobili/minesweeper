class Minefield {
    height: number;
    width: number;
    numMines: number;
    field: Array< Array<String> >;

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

        this.field = new Array< Array<String> >(height);
        for (let i = 0; i < height; i++) {
            this.field[i] = new Array<String>(width);
        }
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
                this.field[i][j] = "_";
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

            if (this.field[x][y] === "*") {
                // this grid space is already occupied by a mine
                continue;
            }

            this.field[x][y] = "*";
            m--;
        }
    }

    /**
     * For each square, record the number of mines that are adjacent to it
     */ 
    initializeSquares() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.field[i][j] === "*") {
                    continue;
                }

                let numAdjacents: number = 0;       // the number of adjacent mines

                let left: number = j - 1;
                let right: number = j + 1;
                let down: number = i + 1;
                let up: number = i - 1;

                if (left > 0) {                         // left
                    if (this.field[i][left] === "*") {
                        numAdjacents++;
                    }
                }
                if (left > 0 && up > 0) {               // upper left
                    if (this.field[up][left] === "*") {
                        numAdjacents++;
                    }
                }
                if (up > 0) {                           // up
                    if (this.field[up][j] === "*") {
                        numAdjacents++;
                    }
                }
                if (up > 0 && right < this.width) {    // upper-right
                    if (this.field[up][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (right < this.width) {               // right
                    if (this.field[i][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && right < this.width) { // lower-right
                    if (this.field[down][right] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height) {               // down
                    if (this.field[down][j] === "*") {
                        numAdjacents++;
                    }
                }
                if (down < this.height && left > 0) {           // lower-left
                    if (this.field[down][left] === "*") {
                        numAdjacents++;
                    }
                }

                this.field[i][j] = numAdjacents.toString()
                
            }
        }
    }

    /**
     * @param min : the random integer is greater than or equal to min
     * @param max : the random integer is smaller than max
     * @returns : random integer in the range [min, max)
     */
    randomIntegerBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    test() {
        this.generateField();
        console.log(this.field);
    }
}

export default Minefield;