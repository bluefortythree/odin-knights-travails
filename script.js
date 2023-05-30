let board = document.getElementById('board')
let from = document.getElementById('from')
let to = document.getElementById('to')

function createBoard() {
    for(i = 1; i <= 64; i++) {
        let square = document.createElement('div');
        square.setAttribute('id', i)
        square.setAttribute('class', 'square')
        board.append(square)
        if(square.id <= 8 && square.id % 2 !== 0 || 17 <= square.id && square.id <= 24 && square.id % 2 !==0 || 33 <= square.id && square.id <= 40 && square.id % 2 !== 0 || 49 <= square.id && square.id <= 56 && square.id % 2 !== 0) {
            square.style.backgroundColor = 'white'
        } else if(9 <= square.id && square.id <= 16 && square.id % 2 == 0 || 25 <= square.id && square.id <= 32 && square.id % 2 == 0 || 41 <= square.id && square.id <= 48 && square.id % 2 == 0 || 57 <= square.id && square.id <= 64 && square.id % 2 == 0) {
            square.style.backgroundColor = 'white'
        } else {
            square.style.backgroundColor = 'black'
        }
}
}

createBoard()

class Node {
    constructor(data) {
        this.data = data;
        this.R1U2 = R1U2(data);
        this.R2U1 = R2U1(data);
        this.R2D1 = R2D1(data);
        this.R1D2 = R1D2(data);
        this.L1D2 = L1D2(data);
        this.L2D1 = L2D1(data);
        this.L2U1 = L2U1(data);
        this.L1U2 = L1U2(data);
    }
}


class Path {
    constructor(beginning, end) {
        this.root = convert(beginning);
        this.end = convert(end);
    }

    knightMoves(beginning = this.root, end = this.end) {
    }

    test() {
        let test = new Node(this.root)
        return test;
    }
}

function convert(square) {
    if(square.charAt(0).toUpperCase() === 'A') {
        return [0, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'B') {
        return [1, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'C') {
        return [2, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'D') {
        return [3, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'E') {
        return [4, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'F') {
        return [5, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'G') {
        return [6, Number(square.charAt(1)-1)]
    } else if(square.charAt(0).toUpperCase() === 'H') {
        return [7, Number(square.charAt(1)-1)]
    } 
}

function convertBack(coordinates) {
    if(coordinates[0] === 0) {
        return 'A' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 1) {
        return 'B' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 2) {
        return 'C' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 3) {
        return 'D' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 4) {
        return 'E' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 5) {
        return 'F' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 6) {
        return 'G' + Number(coordinates[1]+1)
    } else if(coordinates[0] === 7) {
        return 'H' + Number(coordinates[1]+1)
    }
}

function R1U2(coordinates) {
    if(coordinates[0]+1 > 7 || coordinates[1]+2 > 7) {
        return null
    } else {
        return [coordinates[0]+1, coordinates[1]+2]
    }
}

function R2U1(coordinates) {
    if(coordinates[0]+2 > 7 || coordinates[1]+1 > 7) {
        return null
    } else {
        return [coordinates[0]+2, coordinates[1]+1]
    }
}

function R2D1(coordinates) {
    if(coordinates[0]+2 > 7 || coordinates[1]-1 < 0) {
        return null
    } else {
        return [coordinates[0]+2, coordinates[1]-1]
    }
}

function R1D2(coordinates) {
    if(coordinates[0]+1 > 7 || coordinates[1]-2 < 0) {
        return null
    } else {
        return [coordinates[0]+1, coordinates[1]-2]
    }
}

function L1D2(coordinates) {
    if(coordinates[0]-1 < 0 || coordinates[1]-2 < 0) {
        return null
    } else {
        return [coordinates[0]-1, coordinates[1]-2]
    }
}

function L2D1(coordinates) {
    if(coordinates[0]-2 < 0 || coordinates[1]-1 < 0) {
        return null
    } else {
        return [coordinates[0]-2, coordinates[1]-1]
    }
}

function L2U1(coordinates) {
    if(coordinates[0]-2 < 0 || coordinates[1]+1 > 7) {
        return null
    } else {
        return [coordinates[0]-2, coordinates[1]+1]
    }
}

function L1U2(coordinates) {
    if(coordinates[0]-1 < 0 || coordinates[1]+2 > 7) {
        return null
    } else {
        return [coordinates[0]-1, coordinates[1]+2]
    }
}

let go = document.getElementById('go');
go.addEventListener('click', (e) => {
    e.preventDefault()
    let beginning = from.value.toUpperCase();
    let end = to.value.toUpperCase();
    if(beginning === end) {
        console.log('There is nowhere to go!')
    } else {
        let path = new Path(beginning, end)
        console.log(path)
        console.log(path.test()) 
    }
})

// let go = document.getElementById('go');
// go.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('hello world')
// })