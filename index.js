let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let player0 = true;

const winPatterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player0) {
      box.innerText = "0";
      player0 = false;
    } else {
      box.innerText = "X";
      player0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
const showWinner = (winner) => {
  let text = winner === "0" ? "Player 1" : "Player 2";
 
  msg.innerText = `Congratulation, Winner is ${text}`;

  msgContainer.classList.remove("hide");
  disabledBtns();
};

const disabledBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  player0 = true;
  enabledBtns();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);

newGameBtn.addEventListener("click", resetGame);
