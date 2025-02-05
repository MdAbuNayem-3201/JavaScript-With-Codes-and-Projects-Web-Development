const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msgConatiner = document.querySelector(".msg-container");
const newGameBtn = document.querySelector("#new-btn");
const msg = document.querySelector("#msg");


let turnO = true; //PlayerO, PlayerX

//winning Pattern
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



const resetGame = () =>{
  turnO = true;
  enableBoxes();
  msgConatiner.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      //turnO===true
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; //to disable the buttons after clicking

    checkWinner();
  });
});

const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled =true;
  }
}



const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}



const showWinner =(winner)=>{
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log(pos1Val, "winner");
            showWinner(pos1Val);
        }
    }
  }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);
