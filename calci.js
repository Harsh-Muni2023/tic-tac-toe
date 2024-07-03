let btn = document.querySelectorAll(".btn");
let played = true;
let buttonReset = document.getElementById("reset");

let output = document.getElementById('text');


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
btn.forEach((event)=>{
    event.addEventListener("click",()=>{
        if(played == true){
            event.textContent = 'X';
            played = false;
        }
        else{
            event.textContent = 'O';
            played = true;
        }
        event.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posVal1 = btn[pattern[0]].innerHTML;
        let posVal2 = btn[pattern[1]].innerHTML;
        let posVal3 = btn[pattern[2]].innerHTML;

        if(posVal1 !='' && posVal2 !='' && posVal3 !=''){
            if(posVal1 ==posVal2 && posVal3 == posVal2){
                text.innerHTML = `winner is ${posVal1}`;
            }
    }
    
    }
}
