let board = document.getElementById('board')

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

// let go = document.getElementById('go');
// go.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('hello world')
// })