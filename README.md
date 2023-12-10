# Space-Invader-Game
The goal is to destroy and prevent the aliens from passing your territory! 

In this README file I will explain the process of building this game. First, I used the HTML to establish order of the page, then I went on https://fontawesome.com/ to collect the icons needed to make the game possible. In additon, I sectioned each icon in div tags and used the alien icon to represent the scoreboard. Lastly, I linked the CSS and Javascript file to the html file for organization.

Before I proceed to the CSS process, I will show each icon representation in the Html. 

Icon 1: rocks && || alien
<i class="fa-solid fa-spaghetti-monster-flying"></i>

Icon 2: bullets
<i class="fa-solid fa-sort-up"></i>

Icon 3: jet
<i class="fa-brands fa-space-awesome"></i>


In CSS, the purpose was to style each section, icon and other tags used for the webpage. First, I wanted the body to have a space background so I create the image and placed it as the webpage's background. Then, I created the board and hidden the overflow so that the elements would not escape the board. Finally, I styled the icons to my liking.

Before I proceed to the Javascript process, I will show the stying method used for each icon.

Icon 1: rocks && || alien
.rocks{
    position: absolute;
    color: purple;
    top: 0px;
    width: 40px;
    height: 20px;
}

Icon 2: bullets
.bullets {
    position: absolute;
    color: yellow;
    bottom: 20px;
    left: 30px;
    width: 8px;
    height: 5px;
}

Icon 3: jet
#jet{
    position: absolute;
    color: red;
    left: 50%;
    bottom: 0px;
    width: 20px;
    height: 20px;
}

For the Javascipt process, I will list the goals I established beforehand and show the solutions.

- First I established the variables needed below.

var jet = document.getElementById('jet');
var board = document.getElementById('board');


- Then I needed to make the jet move so I used the left and right arrow key to make that happen.

window.addEventListener('keydown', (e) => {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if(e.key == "ArrowLeft" && left > 0){
        jet.style.left = left - 10 + 'px';
    }
    //gameboard width - jet width
    else if(e.key == "ArrowRight" && left <= 880){
        jet.style.left = left + 10 + 'px';
    }

-In this section, the I made the bullets go up with the up arrow key. Then I needed to effect the aliens so I made the aliens disappear when they made contact with the aliens. Lastly, whenever the aliens would disappear the score would increase by 1. 

-bullets
    if((e.key === "ArrowUp" || e.key == 32)){
        //var bullet = document.createElement('div');
        var bullet = document.createElement('i');
        bullet.className = 'fa-solid fa-sort-up';
        bullet.classList.add('bullets');
        board.appendChild(bullet);
            

    /bullet will move up
        var movebullet = setInterval(()=>{
        
            //effect the alien 
            var rocks = document.getElementsByClassName('rocks'); 

            for(var i = 0; i<rocks.length; i++){
                var rock = rocks[i];

                var rockbound = rock.getBoundingClientRect();
                var bulletbound = bullet.getBoundingClientRect();
            

            if(
                bulletbound.left >= rockbound.left && 
                bulletbound.right <= rockbound.right &&
                bulletbound.top <= rockbound.top &&
                bulletbound.bottom <= rockbound.bottom
                ){
                    rock.parentElement.removeChild(rock);

                    
                    //scoreboard -> complete
                    document.getElementById('points').innerHTML = 
                        parseInt(document.getElementById('points').innerHTML) + 1;
                }
            }

