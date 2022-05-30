var aircraft = document.getElementById("aircraft");
var battle = document.getElementById("battle");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(aircraft).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    aircraft.style.left = left - 10 + "px";
  }
 
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

         

          if (
            bulletbound.left >= enemyBound.left &&
            bulletbound.right <= enemyBound.right &&
            bulletbound.top <= enemyBound.top &&
            bulletbound.bottom <= enemyBound.bottom
          ) {
            enemy.parentElement.removeChild(enemy); 
            document.getElementById("scores").innerHTML =
              parseInt(document.getElementById("scores").innerHTML) + 1;
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

     
      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; 
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generateEnemies = setInterval(() => {
  var enemy = document.createElement("div");
  enemy.classList.add("enemies");
  
  var enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );

  enemy.style.left = Math.floor(Math.random() * 450) + "px";

  battle.appendChild(enemy);
}, 1000);

var moveEnemies = setInterval(() => {
  var enemies = document.getElementsByClassName("enemies");

  if (enemies != undefined) {
    for (var i = 0; i < enemies.length; i++) {

      var enemy = enemies[i];
      var enemytop = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("top")
      );
    
      if (enemytop >= 450) {
        alert("Game Over");
        
        clearInterval(moveEnemies);
        window.location.reload();
      }

      enemy.style.top = enemytop + 25 + "px";
    }
  }
}, 450);
