let btn = document.querySelector("button");
btn.addEventListener("click",showmessege);

function showmessege(){
    alert("Hi! I am Nayem.")
}

//taking user input

let inputButton = document.querySelector(".input-button")
inputButton.addEventListener("click", inputMessege);
function inputMessege(){
    let name = prompt("Enter Your Name: ")
    inputButton.textContent = "Roll No. 1 " + name;
}