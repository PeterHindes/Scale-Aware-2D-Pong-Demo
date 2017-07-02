//Import functions from pertersJSGameFunctionLibrary
imported = document.createElement('script');
imported.src = './petersJSGameFunctionLibrary.js';
document.head.appendChild(imported);
delete imported;

//Constants
const framesPerSecond = 60;

const paddleWidthPercent = 3;
const paddleHeightPercent = 22;
const paddleEdgeOffsetPercent = 0.5;

const ballDiameterPercent = 2.5;

  //Deffinitions
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');


//Scaling Vars
var paddleHeight;
var paddleWidth;
var paddleEdgeOffset;
var p1;
var p2;

//Scaler
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;



  p1 = (document.getElementById('gameCanvas').height / 2) - paddleHeight;
  p2 = (document.getElementById('gameCanvas').height / 2) - paddleHeight;
}
resizeCanvas();

//Changing Vars
  //Moving Vars
var ballX = 5;
var ballY = 5;




window.onload = function() {
  setInterval(drawGameCanvas, 1000/framesPerSecond);
}

function drawGameCanvas() {

  updateGameVariables();

  //Background
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);

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
  ballX += fFM(5);
}
