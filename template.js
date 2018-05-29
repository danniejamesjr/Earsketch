"use strict";

//		javascript code
//		script_name: INSERT NAME
//
//		author: YOUR NAME
//		description: This is a template
//

// INITIALIZE THE SCRIPT AT THE BEGINNING
init();

// SET TEMPO (aka the speed at which a piece of music is played measured in beats per minute)
setTempo(200);

// assign meaningful variable names and get the value of each sound you want

var drumA = RD_UK_HOUSE__WARMPIANO_1;

var drumB = RD_UK_HOUSE__SQUAREPAD_2;

var bassA = RD_UK_HOUSE__ARPPLUCK_1;

var bassB = RD_UK_HOUSE_ACOUSTICGUITAR_3;

// CONSIDER defining a custom beat (to be used later in a for loop)
// This will look like a string, where 
//      0 <= start of beat (equal to a 16th note or 1/16th of a measure/phrase)
//      + <= continued beat
//      - <= end or no beat

var drumBeat =  "--------0+0+0+0+";

// define new functions with input parameters to set the start and end measures

function sectionA(startMeasure, endMeasure) {

  fitMedia(drumA, 1, startMeasure, endMeasure);

  fitMedia(bassA, 2, startMeasure, endMeasure);

}

function sectionB(startMeasure, endMeasure) {

  fitMedia(drumB, 3, startMeasure, endMeasure);

  fitMedia(bassB, 4, startMeasure, endMeasure);

  // CONSIDER a for loop to loop through beats, which enables you to control the style and rhythm of your sound
  /*
  for (var i = measureBeg; i < measureEnd; i++) {
      makeBeat(drum, 5, i, drumBeat);
    }
  */
}

// Call the functions and pass in the desired start and end measure values (TIP: DO NOT OVERLAP CHANNELS)

sectionA(1, 5);

sectionB(5, 9);

sectionA(9, 13);

sectionB(13, 17);

// Make sure to end your program!
finish();
