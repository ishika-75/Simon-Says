let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","blue"];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);//1000==1sec==>.25sec
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);//1000==1sec==>.25sec
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    // random btn choose
    gameFlash(ranBtn);
}
function checkAns(idx){
    //console.log('current level: ',level);
    
    if(userSeq[idx]==gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
      }
    }else{
        h2.innerHTML=`Game Over!..Your Score was <b>${level}</b> <br>Press any Key to start..`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    
let btn=this;
userFlash(btn);
userColor=btn.getAttribute('id');
console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}