var aircraft = document.getElementById("aircraft");
var battle = document.getElementById("battle");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(aircraft).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    aircraft.style.left = left - 10 + "px";
  }
  //460  =>  battle width - aircraft width
  else if (e.key == "ArrowRight" && left <= 460) {
    aircraft.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    battle.appendChild(bullet);

    var movebullet = setInterval(() => {
      var enemies = document.getElementsByClassName("enemies");

      for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (enemy != undefined) {
          var enemyBound = enemy.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          //Condition to check whether the enemy/alien and the bullet are at the same position..!
          //If so,then we have to destroy that enemy

          if (
            bulletbound.left >= enemyBound.left &&
            bulletbound.right <= enemyBound.right &&
            bulletbound.top <= enemyBound.top &&
            bulletbound.bottom <= enemyBound.bottom
          ) {
            enemy.parentElement.removeChild(enemy); //Just removing that particular enemy;
            //Score in battle
            document.getElementById("scores").innerHTML =
              parseInt(document.getElementById("scores").innerHTML) + 1;
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generateEnemies = setInterval(() => {
  var enemy = document.createElement("div");
  enemy.classList.add("enemies");
  //Just getting the left of the enemy to place it in random position...
  var enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );
  //generate value between 0 to 450 where 450 => battle width - enemy width
  enemy.style.left = Math.floor(Math.random() * 450) + "px";

  battle.appendChild(enemy);
}, 1000);

var moveEnemies = setInterval(() => {
  var enemies = document.getElementsByClassName("enemies");

  if (enemies != undefined) {
    for (var i = 0; i < enemies.length; i++) {
      //Now I have to increase the top of each enemy,so that the enemies can move downwards..
      var enemy = enemies[i]; //getting each enemy
      var enemytop = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("top")
      );
      //475 => battle height - rockheight + 25
      if (enemytop >= 450) {
        alert("Game Over");
        
        clearInterval(moveEnemies);
        window.location.reload();
      }

      enemy.style.top = enemytop + 25 + "px";
    }
  }
}, 450);
