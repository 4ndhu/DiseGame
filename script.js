var round=document.querySelector("h1");
var win=document.getElementById("win");
console.log(win)

var roll=document.querySelector("input[type='submit']");
var dice1=document.getElementById("dice1");
var dice2=document.getElementById("dice2");
var count=0;

roll.addEventListener('click',function(){
    count=count+1;
    round.textContent=(`ROUND:${count}`);
    var random1=Math.ceil(Math.random()*6);
    var random2=Math.ceil(Math.random()*6);

dice1.setAttribute("src",`images/${random1}.png`);
dice2.setAttribute("src",`images/${random2}.png`);

if(random1>random2){
    win.textContent="PLAYER-1 WINS";
}
else if(random1<random2){
    win.textContent="PLAYER-2 WINS";
}
else{
    win.textContent="DRAW";
}

});
