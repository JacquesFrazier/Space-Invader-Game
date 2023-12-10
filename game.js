
//Game Completed
//style the game to your liking 

var jet = document.getElementById('jet');
var board = document.getElementById('board');


window.addEventListener('keydown', (e) => {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if(e.key == "ArrowLeft" && left > 0){
        jet.style.left = left - 10 + 'px';
    }
    //gameboard width - jet width
    else if(e.key == "ArrowRight" && left <= 880){
        jet.style.left = left + 10 + 'px';
    }

    //bullets
    if((e.key === "ArrowUp" || e.key == 32)){
        //var bullet = document.createElement('div');
        var bullet = document.createElement('i');
        bullet.className = 'fa-solid fa-sort-up';
        bullet.classList.add('bullets');
        board.appendChild(bullet);
            

        //bullet will move up-> complete
        var movebullet = setInterval(()=>{
        
            //effect the alien -> complete
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


            //BULLET MOVEMENT => somewhat
            var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue('bottom')
            );


            //stops bullets from moving outside the board -> complete
            //try to erase bullet-> complete
           

            if(bulletbottom >= 580){
                bullet.remove(bullet);
                //clearInterval(movebullet);
            }

             //if(bulletbottom >= 590){
            //    movebullet.remove(movebullet);
            //    //clearInterval(movebullet);
            //}

    
            bullet.style.left = left + "px";
            bullet.style.bottom = bulletbottom + 7 + 'px';
        }, 35);
    }
});


var generaterocks = setInterval(()=>{

    //var rock = document.createElement('div');
    var rock = document.createElement('i');
    rock.className = 'fa-solid fa-spaghetti-monster-flying';
    rock.classList.add('rocks');
    //Just getting the left of the rock to place it in random position....
    var rockleft = parseInt(
        window.getComputedStyle(rock).getPropertyValue('left')
    );
    //generate value between 0 to 880 where 880 -> board width - rock width
    rock.style.left = Math.floor(Math.random() * 860) + "px";
    
    board.appendChild(rock);
}, 1500);



//figure out how to make aliens fall -> completed

var moverocks = setInterval(()=>{
    var rocks = document.getElementsByClassName('rocks');

if( rocks != undefined){
    for(var i = 0; i < rocks.length; i++){
        //Now I have to increase the top of each rock, so the rocks can move downwards..
        var rock = rocks[i];//getting each rock
        var rocktop = parseInt(
            window.getComputedStyle(rock).getPropertyValue('top')
        );

        //game over conditional -> completed

        if(rocktop >= 585){
            alert('Game Over: The Aliens Won');
            clearInterval(moverocks);
            window.location.reload();
        }

        rock.style.top = rocktop + 20 + 'px';
    }
  }
}, 880);

