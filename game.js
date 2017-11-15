//This is a pong game that scales (it need the other files from the github repo to work)
//Notation for the atom extension custom-folds to allow collapsing code.

//<editor-fold> Head (init the canvas, import functions and, setup functions)

  //<editor-fold> Imports
    //Import functions from pertersJSGameFunctionLibrary.js
    imported = document.createElement('script');
    imported.src = './petersJSGameFunctionLibrary.js';
    document.head.appendChild(imported);
    delete imported;

    //Import functions from gameSpecificFunctions.js
    imported = document.createElement('script');
    imported.src = './gameSpecificFunctions.js';
    document.head.appendChild(imported);
    delete imported;

    //Import settings from settings.js
    imported = document.createElement('script');
    imported.src = './settings.js';
    document.head.appendChild(imported);
    delete imported;
  //</editor-fold> Imports

  //Definitions
  const canvas = document.getElementById(canvasName);
  const canvasContext = canvas.getContext('2d');


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
  resetGame();
  setInterval(drawGameCanvas, 1000/*miliseconds*//framesPerSecond);
}
