let lose = false;
let commence = false;
window.onload = function(){
    /* Exercise 1 
    
        let wall_Colour = document.getElementById("boundary1");
	    wall_Colour.addEventListener("mouseover", function() {
            this.setAttribute("class","boundary youlose");	
        });
    */
      
    // Exercise 2
    
    let wall_Colour = document.querySelectorAll(".boundary");
    let start_game = document.getElementById("start");
    start_game.addEventListener("mouseover",function(){
    for(m = 0; m <wall_Colour.length-1;m++){  
        wall_Colour[m].addEventListener("mouseover",function() {
            for(m = 0; m < wall_Colour.length-1;m++){
                wall_Colour[m].setAttribute("class", "boundary youlose");  
                   
            }
            alert("You lose");  
        });
    }
    });


 // Exercise 3  
        end = document.getElementById("end");
        end.addEventListener("mouseover", function(){
        alert("You win");
        });

 // Exercise 4
restart = document.getElementById("start");
restart.addEventListener("click", function() {
    location.reload();
});
 
 // Exercise 5 

}