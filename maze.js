let lose = false;
let commence = false;
window.onload = function(){
    let wall_Colour = document.querySelectorAll(".boundary");
    for (let m = 0; m < wall_Colour.length-1; m++) {
        wall_Colour[m].addEventListener("mouseover", end_game);
    }
    document.getElementById("end").addEventListener("mouseover",game_result);
    document.getElementById("start").addEventListener("click",start_game);
    maze = document.getElementById("maze");
	maze.addEventListener("mouseleave", function() {
		x = 0;
		while(x < wall_Colour.length){
			document.getElementById("status").innerHTML = "You Cheated, stay in boundary :(";
			
			wall_Colour[x].setAttribute("class","boundary youlose");
			x++;
		}
	});
}

function end_game(){
    if(commence){
        setBoundaryCSS("boundary youlose");
        setStat("You Lose!");
        lose = true;
    }
}

function game_result(){
    if(commence){
        if(!lose){
            setStat("You Win!");
        }
        else{
            setStat("You Lose!");
        }
        commence = false;
    }
}

function start_game(){
    setBoundaryCSS("boundary");
    commence = true;
    lose = false;
    setStat("Game In Session");
}

function setBoundaryCSS(cssName){
    var wall_Colour = document.querySelectorAll(".boundary");
    for (let m = 0; m < wall_Colour.length-1; m++) {
        wall_Colour[m].className = cssName;
    }
}

function setStat(stat){
    document.getElementById("status").innerHTML = stat;
}