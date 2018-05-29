"use strict";

//		javascript code
//		script_name: U7A3_Composer_falk.js
//
//		author: Crista Falk
//		description: Composition for CS Principles DB
//

init();
setTempo(95);

// Variable Names

// Other sound options
// var bass = DUBSTEP_DRUMLOOP_MAIN_001;
// var drum = DUBSTEP_DRUMLOOP_MAIN_009;
// var piano_melody = YG_WEST_COAST_HIP_HOP_PIANO_HIGH_1;
// var synth = YG_TRAP_SYNTH_MELODY_1;
// var snare = YG_TRAP_SNARE_6;
// var fastDrums = RD_ELECTRO_DRUMROLLBREAK_5;


var bass = RD_POP_ARPBASS_7;
var drum = EIGHT_BIT_ANALOG_DRUM_LOOP_001;
var piano_melody = HIPHOP_DUSTYPIANOLEAD_002;
var synth = RD_ELECTRO_SYNTHLEAD_17;
var snare = EIGHT_BIT_ANALOG_DRUM_LOOP_002;
var fastDrums = RD_ELECTRO_DRUMROLLBREAK_1;

// Beats
var beatString1 = "0+0+++0++0++0+++";
var beatString2 = "0+++++0+++++0+++";

// Start with bass element of song 
fitMedia(bass, 1, 1, 13);

// Increase the volume throughout the first 4 measures
setEffect(1, VOLUME, GAIN, -50, 1, 5, 5);

// Add in other elements to this main section (gradually)
for (var i = 5; i < 13; i ++){
  makeBeat(drum, 2, i, beatString1);
  makeBeat(piano_melody, 3, i+2, beatString2);
  // The extended playing will form the transition (i.e. i + 4)
  makeBeat(snare, 4, i+4, beatString1);
}

// Section 2
fitMedia(bass, 1, 15, 19);
fitMedia(synth, 2, 15, 19);
fitMedia(fastDrums, 5, 9, 13);

// Changing volume of drums over measure 9 through 13
setEffect(5, VOLUME, GAIN, -30.0, 9.0, 10.0, 13.0);

// Add piano back into section 2
for (var i = 17; i < 21; i ++){
  makeBeat(piano_melody, 4, i, beatString1);
}

// Changing filter cutof frequency from 100 Hz to 3000 Hz over measure 15 through 21
setEffect(4, FILTER, FILTER_FREQ, 100.0, 17.0, 3000.0, 21.0);

// End program
finish();
