window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    switch(e.key){
        case"ArrowUp":
        inputDir.x=0;
        inputDir.y=-1;
        console.log("ArrowUp");
       break;
       case"ArrowDown":
       inputDir.x=0;
       inputDir.y=1;
       console.log("ArrowDown");
       break;

       case"ArrowRight":
       inputDir.x=1;
       inputDir.y=0;
       console.log("ArrowRight");
       break;
       case"ArrowLeft":
       inputDir.x=-1;
       inputDir.y=0;
       console.log("ArrowLeft");
       
       break;
    default:
        break;
    
    
    
    }
})


//buttons works
let bottom=document.querySelector(`.bottom`);

let left=document.querySelector(`.left`);
let right=document.querySelector(`.right`);
bottom.addEventListener(`click`,e=>{

inputDir.x=0;
        inputDir.y=1;
       

})
right.addEventListener(`click`,e=>{
   
    inputDir.x=1;
            inputDir.y=0;
            
    });
 left.addEventListener(`click`,e=>{

        inputDir.x=-1;
                inputDir.y=0;
                
        });
 document.querySelector(".top").addEventListener(`click`,e =>{

  

            inputDir.x=0;
                    inputDir.y=-1;
                    
            });
     let rule=document.querySelector(`.rule`);
         let btn=document.querySelector(`.btn`)
         btn.addEventListener(`click`,e=>{
                if( rule.style.display==`none`){
                rule.style.display=`block`;
                }
                else{
                        rule.style.display=`none`;
                }

         })

         
        
           
           
          
           
        
        
            