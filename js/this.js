const X = "X";
const O = "O";
const DOT = ".";
let board = [[DOT,DOT,DOT],
             [DOT,DOT,DOT],
             [DOT,DOT,DOT]];
let turnStatus=1;

function showBoard() {
    for (let i = 0;i<board.length;i++){
        for (let j = 0;j<board.length;j++){
            let position =i.toString()+j.toString();
            document.getElementById("pos"+position).innerHTML = board[i][j];
        }
    }
}
function checkTurn() {
        turnStatus++;
    if (turnStatus%2==0){
        return O;
    }else
        return X;
}
function changeIcon(posOnBoard) {
    let getI = posOnBoard[3];
    let getJ = posOnBoard[4];
    let thisTurnStatus = checkTurn();
    if(thisTurnStatus == X){
       board[getI][getJ]=X;
    }else if (thisTurnStatus == O) {
        board[getI][getJ]=O;
    }
    showBoard();
    checkWin();

}
function resetGame() {
    board = [[DOT,DOT,DOT],[DOT,DOT,DOT],[DOT,DOT,DOT]];
    showBoard();
}
function checkWin() {
    checkCaseXWin();
    checkCaseOWin();

}

//check all case X player can win
function checkCaseXWin() {
    // for (let i = 0;i<board.length;i++) {
    //     for (let j = 0; j < board.length; j++) {
    //         if (board[j][i] == X && board[j][i] == X && board[j][i] == X) {
    //             alert("Player X is a winner");
    //         }
    //     }
    // }

    let statusXInfo = false;
    if (board[0][0] == X && board[1][0] == X &&board[2][0] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[0][1] == X && board[1][1] == X &&board[2][1] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[0][2] == X && board[1][2] == X &&board[2][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[0][0] == X && board[0][1] == X &&board[0][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[1][0] == X && board[1][1] == X &&board[1][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[2][0] == X && board[2][1] == X &&board[2][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[0][0] == X && board[1][1] == X &&board[2][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    if (board[2][0] == X && board[1][1] == X &&board[0][2] == X){
        alert("Player X is a winner");
        statusXInfo=true;
    }
    return statusXInfo;
}

//check all case O player can win
function checkCaseOWin() {
    // for (let i = 0;i<board.length;i++) {
    //     for (let j = 0; j < board.length; j++) {
    //         if (board[j][i] == O && board[j][i] == O && board[j][i] == O) {
    //             alert("Player O is a winner");
    //         }
    //     }
    // }
    let statusOInfo = false;
    if (board[0][0] == O && board[1][0] == O &&board[2][0] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[0][1] == O && board[1][1] == O &&board[2][1] == O){
        statusOInfo = true;
        alert("Player O is a winner");
    }
    if (board[0][2] == O && board[1][2] == O &&board[2][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[0][0] == O && board[0][1] == O &&board[0][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[1][0] == O && board[1][1] == O &&board[1][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[2][0] == O && board[2][1] == O &&board[2][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[0][0] == O && board[1][1] == O &&board[2][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    if (board[2][0] == O && board[1][1] == O &&board[0][2] == O){
        alert("Player O is a winner");
        statusOInfo = true;
    }
    return statusOInfo;
}


