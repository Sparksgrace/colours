var colors=[];
var numSquares=6;
generateRandomColor(numSquares);
var squares= document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var colorDisplay=document.querySelector("h1 span");
var message=document.querySelector("#message");
var pickedColor=randomColor();
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
var newColor=document.querySelector("#newb");
newColor.addEventListener("click",function(){
    resetGame();
})
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares=3;
    colors=[];
    for(var i=3;i<squares.length;i++)
    {
        squares[i].style.background="#232323"
    }
    resetGame();
})
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares=6;
    resetGame();
})
colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        if(this.style.background===pickedColor){
           for(var j=0;j<colors.length;j++){
               squares[j].style.background=pickedColor;
           }
           h1.style.background=pickedColor;
           message.textContent="Correct!!";
           newColor.textContent="Play Again?";
        }
        else{
            this.style.background="#232323";
            message.textContent="Try again";
        }
    })
}
function randomColor()
{
    return(colors[Math.floor(Math.random()*colors.length)]);
}

function generateRandomColor(num)
{ 
    for(var i=0;i<num;i++){
       var red= Math.floor(Math.random()*256);
       var green=Math.floor(Math.random()*256);
       var blue=Math.floor(Math.random()*256);
       var str= "rgb("+red+", "+green+", "+blue+")";
       colors[i]=str;
    }
}
function resetGame(){
    message.textContent="";
    h1.style.background="steelblue";
    newColor.textContent="New Colors";
    generateRandomColor(numSquares);
    pickedColor=randomColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<colors.length;i++){
        squares[i].style.background=colors[i];
        squares[i].addEventListener("click",function(){
            if(this.style.background===pickedColor){
               for(var j=0;j<colors.length;j++){
                   squares[j].style.background=pickedColor;
               }
               h1.style.background=pickedColor;
               message.textContent="Correct!!";
               newColor.textContent="Play Again?";
            }
            else{
                this.style.background="#232323";
                message.textContent="Try again";
            }
        })
}
}