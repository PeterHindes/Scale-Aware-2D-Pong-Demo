//This is a pong game that scales (it need the other files from the github to work)
//Notation for the atom extension custom-folds to allow colapsing code

//<editor-fold> Head (init the canvas, import functions and, setup functions)
  //Definitions
  const canvas = document.getElementById('gameCanvas');
  const canvasContext = canvas.getContext('2d');

  //Import functions from pertersJSGameFunctionLibrary.js
  imported = document.createElement('script');
  imported.src = './petersJSGameFunctionLibrary.js';
  document.head.appendChild(imported);
  delete imported;

  //Import settings from settings.js
  imported = document.createElement('script');
  imported.src = './settings.js';
  document.head.appendChild(imported);
  delete imported;


  //Scaler
  //Listen For Resize Event
  window.addEventListener('resize', resizeCanvas, false);
  //What to do on resize
  function resizeCanvas() {
    //Resize canvas to meet screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  //Call once to set canvas size on first load (does not loop)
  resizeCanvas();
//</editor-fold> Head (init the canvas, import functions and, setup functions)


//<editor-fold> Init Vars
  //<editor-fold> Ball
    //Position
      var ballX;
      var ballY;
    //Speed
      var ballSpeed;
  //</editor-fold> Ball

  //<editor-fold> Paddles
    //Paddles Sizes
    var paddleHeight;
    var paddleWidth
    //Offset from edge
    var paddleEdgeOffset
  //Player (Paddle) positions
    //Player one
    var p1;
    //Player two
    var p2;
  //</editor-fold> Paddles
//</editor-fold> Init Vars

//<editor-fold> Set starting variales
  ballSpeed = 35;
//</editor-fold> Set starting variales


//Start Game
window.onload = function() {
  setInterval(drawGameCanvas, 1000/*miliseconds*//framesPerSecond);
}


function resetGame() {

  ballX = 50;
  ballY = 50;

}
resetGame();


function drawGameCanvas() {

  //Update the game variables BEFORE rendering
  updateGameVariables();

  //Background
  Rect('black',0,0,canvas.width,canvas.height);

  //Ball
  canvasContext.fillStyle = 'pink';
  canvasContext.fillRect(cFS(ballX,'x',false),	cFS(ballY,'y',false),	cFS(ballDiameterPercent,'x',true),	cFS(ballDiameterPercent,'y',true));


  //Player 1
  Rect(
    'grey' ,
    cFS(0+(paddleEdgeOffsetPercent),'x',false) ,
    cFS(50-intigerCenterCalc(paddleHeightPercent),'y',false) ,
    cFSa(paddleWidthPercent,paddleHeightPercent,true).x ,
    cFSa(paddleWidthPercent,paddleHeightPercent,true).y
  );

  //Player 2
  Rect(
    'grey' ,
    cFS(100+(-paddleEdgeOffsetPercent),'x',false)+(-cFS(paddleWidthPercent,'x',true)) ,
    cFS(50-intigerCenterCalc(paddleHeightPercent),'y',false) ,
    cFSa(paddleWidthPercent,paddleHeightPercent,true).x ,
    cFSa(paddleWidthPercent,paddleHeightPercent,true).y
  );

}

function updateGameVariables() {
  if ((ballX+ballDiameterPercent) >= 100 || ballX <= 0){
    ballSpeed *= -1
    console.log("Big");
  }
  //console.log(canvas.width);
  //console.log(ballX);
  ballX += fFM(ballSpeed,framesPerSecond);
}
