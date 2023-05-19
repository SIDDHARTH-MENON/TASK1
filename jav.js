let inputDir= {
    x:0,y:0,
}
const foodeat=new Audio("food.mp3.wav");
const gameover=new Audio("gameover.wav");
let snake=[{
    x:15,y:9,
}]
let food1={
    x:5,y:6,
}
let food2={
  
    x:19,y:13,
   }
   let food3={
    x:20,y:1,
   }
   let food4={
    x:18,y:10,
   }
   let red=2;
   let blue=0;
   let yellow=1;
   let count=0;

   let redie=document.querySelector(`.red`)
   let yell=document.querySelector(`.yellow`)
   let bl=document.querySelector(`.blue`)
let simp=prompt("enter your name");

//game external
setInterval(gamengine,200);
  

let score=0;
let seconds=60;
localStorage.setItem(simp,score);
   let container=document.querySelector(`.container`);
   let scorebox=document.createElement(`div`);
   scorebox.className=`score`;
   
   container.appendChild(scorebox);
   scorebox.innerHTML="score:0";

   setInterval(() => {
    seconds--;
    timer.textContent=`time:`+seconds
   }, 1000);
let timer=document.createElement(`div`);
container.appendChild(timer);
timer.className=`pass`; 

//game logic


function gamengine(){
    

if(snake[0].x===food1.x&&snake[0].y===food1.y){
  red++;
  

  if(red==yellow+2&&red==blue+3){
 foodeat.play();
        snake.unshift({ x:snake[0].x+inputDir.x,y:snake[0].y+inputDir.y});

let a=2;
    let b=16; 
    food1={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    score++;
    localStorage.setItem(simp,score);
  

scorebox.textContent="score:0"+score;
redie.style.color="red";



}
else{
    gameover.play();
alert("game over")
snake=[{
    x:15,y:9,
}]
inputDir.x=0;
inputDir.y=0;
seconds=60;

scorebox.textContent="score: 0";
 score=0;
red=2;
yellow=1;
blue=0;
}
}
if(snake[0].x===food2.x&&snake[0].y===food2.y){
yellow++;
if(red==yellow+1&&blue==yellow-2){
    foodeat.play();
    snake.unshift({x:snake[0].x+inputDir.x,y:snake[0].y+inputDir.y});
let a=2;
    let b=16;
 
food2={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    score++;

    scorebox.textContent="score:0"+score;
    
    localStorage.setItem(simp,score);
    yell.style.color="yellow";
}
    else{
        gameover.play();
        alert("game over");
        snake=[{
            x:15,y:9,
        }]
        inputDir.x=0;
        inputDir.y=0;
        seconds=60;
        
        scorebox.textContent="score: 0";
        score=0;
     red=2;
     yellow=1;
     blue=0;
    }
    
   
}

if(snake[0].x===food3.x&&snake[0].y===food3.y){
blue++;
if(red==blue+2&&yellow==blue+1){
    foodeat.play();
    snake.unshift({x:snake[0].x+inputDir.x,y:snake[0].y+inputDir.y});
let a=2;
    let b=16; 
     food3={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    
score++;

scorebox.textContent="score:0"+score;

localStorage.setItem(simp,score);
bl.style.color="black";
redie.style.color="black";
yell.style.color="black";

}
else{
    gameover.play();
    alert("game over");
    snake=[{
        x:15,y:9,
    }]
    inputDir.x=0;
    inputDir.y=0;
    seconds=60;
    
    scorebox.textContent="score: 0";
    score=0;
 red=2;
 yellow=1;
 blue=0;
 
}
}
if(snake[0].x===food4.x&&snake[0].y===food4.y){
    seconds=seconds+4;
    let a=2;
    let b=16; 
     food4 ={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
}
for(let i=snake.length-2;i>=0;i--){
    
    snake[i+1]={...snake[i]};
}

 
snake[0].x=snake[0].x+inputDir.x;
snake[0].y=snake[0].y+inputDir.y;

if(snake[0].x==23||snake[0].y==23 ||snake[0].x==0||snake[0].y==0||seconds==0){
    gameover.play();
    alert("the game ends");
    snake=[{
        x:15,y:9,
    }]
    inputDir.x=0;
    inputDir.y=0;
    seconds=60;
    red=2;
yellow=1;
blue=0;
 scorebox.textContent="score: 0";
 score=0;
 redie.style.color="black";
 yell.style.color="black";
 bl.style.color="black";


}
    

let game=document.querySelector(`.game`);
game.innerHTML="";
snake.forEach((e,index) => {
  

  var box=document.createElement(`div`);
    
    box.style.gridRowStart=e.y;
    box.style.gridRowEnd=e.y;
    

    box.style.gridColumnStart=e.x;
 box.style.gridColumnEnd=e.x;
  
   if (index==0) {
    box.className='head';
  
   } 
   else{
    box.className=`time`;


   }
    
     game.appendChild(box);
  



   
})




   var foodie=document.createElement(`div`);
 foodie.style.gridRowStart=food1.y;
    
    foodie.style.gridColumnStart=food1.x;
    foodie.classList.add("food");

   game.appendChild(foodie);




   var color1=document.createElement(`div`);
 color1.style.gridRowStart=food2.y;
    
    color1.style.gridColumnStart=food2.x;
    color1.classList.add("color1");

   game.appendChild(color1);

   var color2=document.createElement(`div`);
   color2.style.gridRowStart=food3.y;
      
      color2.style.gridColumnStart=food3.x;
      color2.classList.add("color2");
  
     game.appendChild(color2);

     var color3=document.createElement(`div`);
     color3.style.gridRowStart=food4.y;
        
        color3.style.gridColumnStart=food4.x;
        color3.classList.add("code");

    
       game.appendChild(color3);
   

}

    

   
   

    
   



 