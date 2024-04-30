var player1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var player2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

document.getElementById("player1").src="images/dice" + player1 + ".png";
document.getElementById("player2").src="images/dice" + player2 + ".png";

console.log(player1);
console.log(player2);

if (player1 > player2) {
    document.getElementsByTagName("footer")[0].innerHTML = "Player 1 Wins";
}

if (player2 > player1) {
    document.getElementsByTagName("footer")[0].innerHTML = "Player 2 Wins";
}

if (player1 == player2) {
    document.getElementsByTagName("footer")[0].innerHTML = "It's a tie!";
}