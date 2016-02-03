'use strict';

var round = require( 'math-round' );
var MAX_UINT32 = require( 'const-max-uint32' );
var fromWord = require( './../lib' );

var word;
var f32;
var i;

// Create single-precision floating-point numbers from unsigned integers...
for ( i = 0; i < 1000; i++ ) {
	word = round( Math.random()*MAX_UINT32 );
	f32 = fromWord( word );
	console.log( 'word: %d => float32: %d', word, f32 );
}