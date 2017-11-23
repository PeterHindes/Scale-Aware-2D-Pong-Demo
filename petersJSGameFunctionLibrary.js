//This is a function library by Peter Hindes.
//Scale your javascrypt game to meet the users screen dimensions!
//Notation for the atom extension custom-folds to allow collapsing code.


//<editor-fold> Rectangle drawing functions with special inbuilt calculations

  // Draw a rectangle based on percent of canvas not pixels
  function scaleRect(drawColor, xPercent,yPercent, widthPercent,heightPercent, maintainAspect) {
    // Calculate pixel values
    var pixelWidth = cFSa(widthPercent,heightPercent, maintainAspect).x;
    var pixelHeight = cFSa(widthPercent,heightPercent, maintainAspect).y;
    var xPixel = cFS(xPercent,'x',false);
    var yPixel = cFS(yPercent,'y',false);

    // Draw rectangle
    Rect(drawColor, xPixel,yPixel, pixelWidth,pixelHeight);
    //canvasContext.fillStyle = drawColor;
    //canvasContext.fillRect(xPixel,yPixel,	pixelWidth,pixelHeight);
  }

  // Draw a normal rectangle (based on pixels) with a color
  function Rect(drawColor, xPixel,yPixel, pixelWidth,pixelHeight) {
    // Draw rectangle
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(xPixel,yPixel,	pixelWidth,pixelHeight);
  }

  /*
  function smartRect(drawColor, xPixel,yPixel, pixelXRad,pixelYRad) {

    if {}

    var pixelWidth = xPixel - pixelXRad;

    // Draw rectangle
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(xPixel,yPixel,	pixelWidth,pixelHeight);
  }*/

//</editor-fold> Rectangle drawing functions with special inbuilt calculations


//<editor-fold> Transformitive functions

  // Calculates the mid point between a number and 0 (otherwise known as top or left) and rounds down on non Integers
  function integerCenterCalc(toCenter) {
    return (Math.floor(toCenter / 2));
  }

  // Calculates the mid point between 2 numers and rounds down on non Integers
  function integerMidpointCalc(point1,point2) {
    return (Math.floor((point1 + point2) / 2 ));
  }

  // Calculates the mid point between 2 numers and rounds down on non Integers
  function integerArrayMidpointCalc(point1x,point2x , point1y,point2y) {
    var coordinates = {
      x: Math.floor((point1x + point2x) / 2 ) ,
      y: Math.floor((point1y + point2y) / 2 )
    }

    return coordinates;
  }

  // Calculates distance per frame for a distance to be moved in a second at a specified framerate (pixel/percent agnostic)
  function frameFreeMovement(movePerSecond,framesPerSecond) {
    //Should probably impliment delta time, examine the current usage of this function to asses how to impliment    !!!!
    //There is almost noticible diffrence in speed between "frames" (repeating speedups and slow downs)
    return (movePerSecond/framesPerSecond);
  }

  // Calculates pixel location based on percent of canvas (standard (top/left)=0% to (bottom/right)=100%)
  function canvasFreeScaling(percent,axis,maintainAspect){
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

  //     REQUIRES cFS (canvasFreeScaling) TO WORK!!! (keep this in mind if you plan to just rip one function from this library for optomization)
  // Returns object containing x and y in pixels of 2 percent based coordinates
  function canvasFreeScalingArray(percentX,percentY,maintainAspect){
    var coordinates = {
      x: canvasFreeScaling(percentX,'x',maintainAspect) ,
      y: canvasFreeScaling(percentY,'y',maintainAspect)
    }
    return coordinates;
  }

//</editor-fold> Transformitive functions


//<editor-fold> Aliases for functions with long names

  // cFS stands for Canvas Free Scaling
  // Calculates pixel location based on percent of canvas (standard (top/left)=0% to (bottom/right)=100%)
  function cFS(percent,axis,maintainAspect) {
    return (canvasFreeScaling(percent,axis,maintainAspect));
  }

  // cFSa stands for Canvas Free Scaling Array
  // Returns object containing x and y in pixels of 2 percent based coordinates
  function cFSa(percentX,percentY,maintainAspect) {
    return (canvasFreeScalingArray(percentX,percentY,maintainAspect));
  }

  // fFM stands for Frame Free Movement
  // Calculates distance per frame for a distance to be moved in a second at a specified framerate (pixel/percent agnostic)
  function fFM(movePerSecond,framesPerSecond) {
    return (frameFreeMovement(movePerSecond,framesPerSecond));
  }

  // iCC stands for Integer Center Calc(ulator)
  // Calculates the mid point between a number and 0 (otherwise known as top or left) and rounds down on non Integers
  function iCC(toCenter) {
    return (integerCenterCalc(toCenter));
  }

  // iMC stands for Integer Midpoint Calc(ulator)
  // Calculates the mid point between 2 numers and rounds down on non Integers
  function iMC(point1,point2) {
    return (integerMidpointCalc(point1,point2));
  }

  // iAMC stands for Integer Array Midpoint Calc(ulator)
  // Calculates the mid point between 2 numers and rounds down on non Integers
  function iAMC(point1x,point2x , point1y,point2y) {
    return (integerArrayMidpointCalc(point1x,point2x , point1y,point2y));
  }

//</editor-fold> Aliases for functions with long names


//<editor-fold> Depricated and or Broken functions

/*  //Calculates the mid point between a number and 0 (rounds down on non Integers (otherwise known as top or left depending on if you use the result or x or y))
  function IntegerCenterCalc(toCenter) {
    //Check if center is inbetween pixels
    if ( (toCenter % 2) == 0 ) {
      return (toCenter / 2);
    } else if ( (toCenter % 2) == 1 ) {	//Default to top/left pixel if centering lands on mid pixel
      return ((toCenter / 2) - 0.5);
    } else {
      console.log("Error Calculating IntegerCenter. Check Your Code!");
      return -50;
    }
  }
*/

//</editor-fold> Depricated and or Broken functions


console.log("Imported Game Function Library");
