"use strict";

//		javascript code
//		script_name: U7A4_MusicProject_Falk.js
//
//		author: Crista Falk
//		description: U7A4: Make Your Own Music Project
//

init();
setTempo(100);

// Sounds
var bass1 = RD_WORLD_PERCUSSION_BASSWOODENTONE_3;
var bass2 = RD_WORLD_PERCUSSION_BASSWOODENTONE_1;
var claps = YG_FUNK_CLAPS_1;
var drum = RD_WORLD_PERCUSSION_DRUMSMAIN_11;
var glass = RD_WORLD_PERCUSSION_WOODENGLASSDRUM_1;
var percussion = RD_WORLD_PERCUSSION_DRUMPART_4;
var piano = RD_WORLD_PERCUSSION_KALIMBA_PIANO_1;
var string = RD_WORLD_PERCUSSION_ETHNICSTRING_4;

// Variables so I don't get the channels fixed up
var bass1Channel = 9;
var bass2Channel = 2;
var clapChannel = 3;
var glassChannel = 4;
var drumChannel = 5;
var percussionChannel = 6;
var pianoChannel = 7;
var stringChannel = 8;

// Beats
var bassBeat1 =       "0++0++0+0+++----";
var bassBeat2 =       "0++++-0+++0++++-";
var clapBeat =        "0000000000000000";
var drumBeat =       "----0+++++++----";
var drumTransBeat =  "--------0+0+0+0+";
var stringTransBeat = "0+++++++0++++--";

// The bass line
function playBass(measureBeg, measureEnd) {
  for (var i = measureBeg; i < measureEnd; i++){
    if (i % 2 === 0){
      makeBeat(bass1, bass1Channel, i, bassBeat1);
    } else {
      makeBeat(bass1, bass1Channel, i, bassBeat1);
      makeBeat(bass2, bass2Channel, i, bassBeat2);
    }
  }
}

function playClaps(measureBeg, measureEnd) {
  for (var i = measureBeg; i < measureEnd; i++) {
    makeBeat(claps, clapChannel, i, clapBeat);
  }
}

function playGlass(measureBeg, measureEnd){
  fitMedia(glass, glassChannel, measureBeg, measureEnd);
}

function playSnare(measureBeg, measureEnd) {
  for (var i = measureBeg; i < measureEnd; i++) {
    makeBeat(drum, drumChannel, i, drumBeat);
  }
}

// Introduction
function intro(measureBeg, measureEnd) {
  playBass(measureBeg, measureEnd);
  playClaps(measureBeg+4, measureEnd);
  setEffect(clapChannel, VOLUME, GAIN, -50.0, measureBeg+4, 10.0, measureEnd);
  playSnare(measureBeg+4, measureEnd);
}
// A Section
function a_section(measureBeg, measureEnd) {
  playBass(measureBeg, measureEnd);
  playGlass(measureBeg, measureEnd);
  playSnare(measureBeg, measureEnd);
  setEffect(glassChannel, VOLUME, GAIN, 10.0, measureEnd-2, -50.0, measureEnd);
}

// B Section
function b_section(measureBeg, measureEnd) {
  playBass(playBass);
  fitMedia(percussion, percussionChannel, measureBeg, measureEnd);
  fitMedia(piano, pianoChannel, measureBeg, measureEnd);
  playSnare(measureBeg, measureEnd);
  // setEffect(pianoChannel, VOLUME, GAIN, 10.0, measureEnd-4, -50.0, measureEnd);
  // setEffect(percussionChannel, VOLUME, GAIN, 10.0, measureEnd-4, -50.0, measureEnd);
} 

// C Section
function c_section(measureBeg, measureEnd) {
  playBass(measureBeg, measureEnd);
  playSnare(measureBeg, measureEnd);
  for (var i = measureBeg; i < measureEnd; i++) {
    makeBeat(string, stringChannel, i, stringTransBeat);
  }
}

// Transition
function transition(measureBeg, measureEnd) {
  for (var i = measureBeg; i < measureEnd; i++) {
    makeBeat(string, stringChannel, i, stringTransBeat);
    makeBeat(drum, drumChannel, i, drumTransBeat);
  }
}

// conclusion
function ending(measureBeg, measureEnd) {
  setEffect(1, FILTER, FILTER_FREQ, 20, measureBeg, 10000, measureEnd); // first effect, filter sweep
  // second effect, volume changes
  setEffect(pianoChannel, VOLUME, GAIN, -10, measureBeg+1, 0, measureEnd);  // crescendo
  setEffect(pianoChannel, VOLUME, GAIN, 0, measureBeg+3, -10, measureEnd);  // begin fade out
  setEffect(pianoChannel, VOLUME, GAIN, -10, measureBeg+4, -60, measureEnd); // end of fade out
  fitMedia(piano, pianoChannel, measureBeg, measureEnd);
}

// Calls

intro(1,9);

a_section(9,17);

transition(17, 21);

b_section(21,29);

// Changing transition sounds and drum beat
var drum = RD_WORLD_PERCUSSION_DRUMPART_5;
drumTransBeat =  "0++++++++++-0+++";

transition(29, 33);

// Changing drum beat back
drumTransBeat =  "--------0+0+0+0+";
a_section(33,41);

// Channging string sound 
var string = RD_WORLD_PERCUSSION_ETHNICSTRING_1;
transition(41, 45);

// Changing string and drums back
string = RD_WORLD_PERCUSSION_ETHNICSTRING_4;
drum = RD_WORLD_PERCUSSION_DRUMSMAIN_11;

c_section(45, 53);

transition(53, 57);

ending(57, 65);

finish();
