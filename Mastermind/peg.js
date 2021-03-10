//Peg and PegBW are both in here
class peg {
    constructor() {
        this.i = Math.floor(Math.random() * Math.floor(6));
        if (this.i == 0) {
            this.blue = true;
            this.color = "blue";
        } else if (this.i == 1) {
            this.orange = true;
            this.color = "orange";
        } else if (this.i == 2) {
            this.green = true;
            this.color = "green";
        } else if (this.i == 3) {
            this.pink = true;
            this.color = "pink";
        } else if (this.i == 4) {
            this.yellow = true;
            this.color = "yellow";
        } else if (this.i == 5) {
            this.red = true;
            this.color = "red";
        }
    }

    color() {
        return this.color;
    }

    isBlue() {
        return this.blue;
    }

    isOrange() {
        return this.orange;
    }

    isGreen() {
        return this.green;
    }

    isPink() {
        return this.pink;
    }

    isYellow() {
        return this.yellow;
    }

    isRed() {
        return this.red;
    }

}

class pegBW {
    constructor(status) {
        this.status = status;
        if (status == 0) {
            this.black = true;
            this.color = "black";
            this.white = false;
            this.empty = false;
        }
        if (status == 1) {
            this.white = true;
            this.color = "white"
            this.black = false;
            this.empty = false
        }
        if (status == 2) {
            this.empty = true;
            this.color = "empty";
            this.black = false;
            this.white = false;
        }
    }

    isBlack() {
        return this.black;
    }
    isWhite() {
        return this.white;
    }
    isEmpty() {
        return this.empty;
    }
    color() {
        return this.color;
    }

}




let chicken = new peg();
console.log(chicken.i);
console.log(chicken.color);

let cow = new pegBW(0);
console.log(cow.isBlack());


