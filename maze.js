let lose = false;
let win = false;
window.onload = function(){
    /* Exercise 1 
    
        let wall_Colour = document.getElementById("boundary1");
	    wall_Colour.addEventListener("mouseover", function() {
            this.setAttribute("class","boundary youlose");	
        });
    */
      
    // Exercise 2
    
    let wall_Colour = document.querySelectorAll(".boundary");
    for(m = 0; m <wall_Colour.length-1;m++){  
        wall_Colour[m].addEventListener("mouseover",function() {
            for(m = 0; m < wall_Colour.length-1;m++){
                wall_Colour[m].setAttribute("class", "boundary youlose"); 
                lose = true;      
            } 
        });
    }
    if (lose === true) {
        alert("You lose"); 
    }
    

    
     
 
}

