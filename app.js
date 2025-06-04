let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;  //player1,player2

const winning_patterns =[
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    })
});


const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() => {
    for (let pattern of winning_patterns){
        let posVal1 = boxes[pattern[0]].innerText; 
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != "")
        {
            if(posVal1 === posVal2 && posVal2 ===posVal3)
            {
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
}


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);