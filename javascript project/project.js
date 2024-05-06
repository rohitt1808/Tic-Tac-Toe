let btns=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector(".display");
let msg=document.querySelector(".msg");
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                   [0,4,8],[2,4,6]];
  let flago=true;
  const resetgame=()=>{
   enableboxes();
   newgame.classList.add("hide");
   msg.innerText="";
  }
  let count=0;
  btns.forEach((btn)=>{
    btn.addEventListener("click",() =>  {
        console.log("button was clicked");
        ++count;
       if(flago){
        btn.innerText="O";
        flago=false;
       }
       else{
        btn.innerText="X";
        flago=true;
       }
       btn.disabled=true;
       checkwinner();
    })
  })
  let bool=false;
  const checkwinner=()=>{
    for(position of winPatterns){
        let pos1=btns[position[0]].innerText;
        let pos2=btns[position[1]].innerText;
        let pos3=btns[position[2]].innerText;
        if(pos1 !="" && pos2!= "" && pos3!=""){
            if(pos1===pos2 && pos2 === pos3){
              showwinner(pos1);
              bool=true;
            }
        }
        if(bool===false && count===9){
           draw();
        }
    }
  }
  const showwinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    newgame.classList.remove("hide");
    disabledboxes();
  }
  const disabledboxes=()=>{
    for(box of btns){
        box.disabled=true;
    }
  }
  const enableboxes=()=>{
    for(box of btns){
    flago=true;
        box.disabled=false;
        box.innerText="";
    }
  }
  reset.addEventListener("click",resetgame);
  newgame.addEventListener("click",resetgame);
  const draw=()=>{
    msg.innerText=`Game is drawn`;
    newgame.classList.remove("hide");
  }