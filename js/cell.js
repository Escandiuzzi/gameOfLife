class Cell {
    status = 0;
    neighbors = [];

    birthThresHold = 0;
    survivalThreshold = 0;

    constructor(birthThresHold, survivalThreshold) {
        this.birthThresHold = birthThresHold;
        this.survivalThreshold = survivalThreshold;
    }

    getState() {
        var neighborsAlive = 0;

        this.neighbors.forEach((neighbor) => {
            if(neighbor.status === 1) {
                neighborsAlive++;
            }
        })

        if(neighborsAlive < 2) {
            this.status = 0;
        }
        else if (this.status === 1 && (neighborsAlive === 2 || neighborsAlive === 3)) {
            this.status = 1;
        }
        else if (neighborsAlive > 3) {
            this.status = 0;
        }
        else if( this.status === 0 && neighborsAlive === 3) {
            this.status = 1;
        }

        return this.status;
    }
}