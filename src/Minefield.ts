class Minefield {
    height: number;
    width: number;
    numMines: number;
    field: Array< Array<String> > = [];

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
    }

    // Creates the MineField
    generateField() {
        this.intializeField();
    }

    // Fills the field with null values in the shape (height, width)
    intializeField() {
        let gridRow: Array<String> = [];
        for (let i = 0; i < this.height; i++) {
            gridRow[i] = "_";
        }
        for (let i = 0; i < this.height; i++) {
            this.field[i] = gridRow;
        }
    }

    // Populates the field with mines randomly scattered around
    intializeMines() {
        let m: number = this.numMines;

        while (m != 0) {

            m--;
        }
    }

    test() {
        this.generateField();
        console.log(this.field);
    }
}

export default Minefield;