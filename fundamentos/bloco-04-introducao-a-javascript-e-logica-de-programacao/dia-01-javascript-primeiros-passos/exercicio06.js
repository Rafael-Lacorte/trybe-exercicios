let piece = 'King'
piece.toLowerCase()

if (piece === "king") {
    console.log("The King moves from its square to a neighboring square")
}else if (piece === "rook") {
    console.log("the Rook can move in its line or row")
}else if (piece === "bishop") {
    console.log("the Bishop moves diagonally")
}else if (piece === "queen") {
    console.log("the Queen may move like a Rook or a Bishop")
}else if (piece === "pawn") {
    console.log("he Pawn moves one square straight ahead")
} else {
    console.log("erro")
}



