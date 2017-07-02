//Rectangle drawing functions with special inbuilt calculations
//<==
  //Draw a rectangle based on percent of canvas not pixels
  function scaleRect(drawColor, xPercent,yPercent, widthPercent,heightPercent, maintainAspect) {
    //calculate pixel values
    var pixelWidth = cFSa(widthPercent,heightPercent, maintainAspect).x;
    var pixelHeight = cFSa(widthPercent,heightPercent, maintainAspect).y;
    var xPixel = cFS(xPercent,'x',false);
    var yPixel = cFS(yPercent,'y',false);

    //draw rectangle
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(xPixel,yPixel,	pixelWidth,pixelHeight);
  }

  //Draw a normal rectangle with a color (based on pixels)
  function Rect(drawColor, xPixel,yPixel, pixelWidth,pixelHeight) {
    //draw rectangle
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(xPixel,yPixel,	pixelWidth,pixelHeight);
  }
//==>

//Transformitive functions
//<==
  //Calculates the mid point between a number and 0 (rounds down on non intigers (otherwise known as top or left depending on if you use the result or x or y))
  function intigerCenterCalc(toCenter) {
    //Check if center is inbetween pixels
    if ( (toCenter % 2) == 0 ) {
      return (toCenter / 2);
    } else if ( (toCenter % 2) == 1 ) {	//Default to top/left pixel if centering lands on mid pixel
      return ((toCenter / 2) - 0.5);
    } else {
      console.log("Error Calculating intigerCenter. Check Your Code!");
      return -50;
    }
  }

  //fFM stands for Frame Free Movement
  //Calculates distance per frame for a distance to be moved in a second at a specified framerate (pixel/percent agnostic)
  function fFM(movePerSecond,framesPerSecond) {
    return (movePerSecond/framesPerSecond);
  }

  //cFS stands for Canvas Free Scaling
  //calculates pixel location based on percent of canvas (standard top left to botom right)
  function cFS(percent,axis,maintainAspect){
    var Refrence;

    if ( maintainAspect ) {
      Refrence = canvas.height
    } else {
      if ( axis == 'x' ) {
        Refrence = canvas.width;
      } else if ( axis == 'y' ) {
        Refrence = canvas.height;
      }
    }

    return (Refrence * (percent/100));

  }
  //REQUIRES cFS TO WORK!!! (look up^)
  //returns object containing x and y in pixels of 2 percent based coordinates
  function cFSa(percentX,percentY,maintainAspect){
    var coordinates = {
      x: cFS(percentX,'x',maintainAspect) ,
      y: cFS(percentY,'y',maintainAspect)
    }
    return  coordinates;
  }
//==>
