<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>aircraft war</title>
  </head>
  <style>
    body {
      width: 100%;
      overflow: hidden;
      background: url("space2.jpg");
      background-size: cover;
    }

    h1 {
      text-align: center;
      color: white;
      font-weight: bold;
      margin: 0;
      margin-top: 10px;
    }
    #battle {
      position: relative;
      width: 500px;
      height: 500px;
      margin: 30px auto;
      border: 4px solid white;
      border-style: groove;
      background-color: rgb(41, 6, 46);
      overflow: hidden;
    }

    #aircraft {
      position: absolute;
      width: 50px;
      height: 50px;
      background: url("ship.png");
      background-size: contain;
      background-repeat: no-repeat;
      left: 50%;
      bottom: 3px;
    }

    .bullets {
      position: absolute;
      bottom: 40px;
      left: 50%;
      width: 20px;
      height: 20px;
      background: url("bullet.png");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .enemies {
      position: absolute;
      top: 0px;
      width: 50px;
      height: 50px;
      background: url("alien1.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    #scores {
      position: absolute;
      top: 0px;
      margin: 70px;
      opacity: 1;
      font-size: 10em;
      color: white;
    }
  </style>
  <script src="app.js" defer></script>
  <body>
    <h1>AIRCRAFT WAR</h1>
    <div id="battle">
      <div class="enemies"></div>
      <div id="aircraft"></div>
    </div>
    <div id="scores">0</div>
  </body>
</html>
