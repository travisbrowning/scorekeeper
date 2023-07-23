let player1Score = document.querySelector("#p1Score");
let player2Score = document.querySelector("#p2Score");
let score = document.querySelector("#scoreLimit");
let scoreLimit = parseInt(score.value);
let player1 = 0;
let player2 = 0;
const p1Btn = document.querySelector(".p1Btn");
const p2Btn = document.querySelector(".p2Btn");
const pEl = document.querySelector("p");

function updateSelectedOption() {
  scoreLimit = parseInt(score.value);
}

function disable() {
  p1Btn.disabled = true;
  p2Btn.disabled = true;
}

score.addEventListener("change", updateSelectedOption);

function win() {
  if (player1 === scoreLimit) {
    player1Score.style.color = "lightgreen";
    player2Score.style.color = "red";
    disable();
    pEl.innerText = "Player 1 Wins!";
  } else if (player2 === scoreLimit) {
    player2Score.style.color = "lightgreen";
    player1Score.style.color = "red";
    disable();
    pEl.innerText = "Player 2 Wins!";
  }
}

document.getElementById("container").addEventListener("click", (e) => {
  if (e.target.className === "resetBtn") {
    player1Score.innerText = 0;
    player1Score.style.color = "black";
    player1 = 0;
    player2Score.innerText = 0;
    player2Score.style.color = "black";
    player2 = 0;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    pEl.innerText = "Use the buttons below to keep score.";
  } else if (e.target.className === "p1Btn") {
    player1Score.innerText++;
    player1++;
    win();
  } else if (e.target.className === "p2Btn") {
    player2Score.innerText++;
    player2++;
    win();
  }
});
