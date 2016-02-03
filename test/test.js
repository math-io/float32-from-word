'use strict';

// MODULES //

var tape = require( 'tape' );
var ninf = require( 'const-ninf-float32' );
var pinf = require( 'const-pinf-float32' );
var repeat = require( 'utils-repeat-string' );
var rpad = require( 'utils-right-pad-string' );
var fromWord = require( './../lib' );


// FIXTURES //

var negativeLarge = require( './fixtures/negative_large.json' );
var negativeNormal = require( './fixtures/negative_normal.json' );
var negativeSmall = require( './fixtures/negative_small.json' );
var negativeSubnormal = require( './fixtures/negative_subnormal.json' );
var negativeTiny = require( './fixtures/negative_tiny.json' );
var positiveLarge = require( './fixtures/positive_large.json' );
var positiveNormal = require( './fixtures/positive_normal.json' );
var positiveSmall = require( './fixtures/positive_small.json' );
var positiveSubnormal = require( './fixtures/positive_subnormal.json' );
var positiveTiny = require( './fixtures/positive_tiny.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof fromWord === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `0`, the function returns `0`', function test( t ) {
	t.equal( fromWord( 0 ), 0, 'equals 0' );
	t.end();
});

tape( 'if provided a word corresponding to `-0`, the function returns `-0`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '1';
	exp = repeat( '0', 8 ); // all 0s
	frac = repeat( '0', 23 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );
	
	t.equal( x, -0, 'equals 0' );
	t.equal( 1/x, ninf, 'returns -0' );
	t.end();
});

tape( 'if provided a word corresponding to `+infinity`, the function returns `+infinity`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '0';
	exp = repeat( '1', 8 ); // all 1s
	frac = repeat( '0', 23 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );
	
	t.equal( x, pinf, 'equals +infinity' );
	t.end();
});

tape( 'if provided a word corresponding to `-infinity`, the function returns `-infinity`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '1';
	exp = repeat( '1', 8 ); // all 1s
	frac = repeat( '0', 23 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );
	
	t.equal( x, ninf, 'equals -infinity' );
	t.end();
});

tape( 'if provided a word corresponding to `NaN`, the function returns `NaN`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '0';
	exp = repeat( '1', 8 ); // all 1s
	frac = rpad( '1', 23, '0' ); // not all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );
	
	t.ok( x !== x, 'equals NaN' );
	t.end();
});

tape( 'if provided words corresponding to large positive values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveLarge.x;
	expected = positiveLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to normal positive values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveNormal.x;
	expected = positiveNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to small positive values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSmall.x;
	expected = positiveSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to tiny positive values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveTiny.x;
	expected = positiveTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to subnormal positive values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSubnormal.x;
	expected = positiveSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to large negative values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeLarge.x;
	expected = negativeLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to normal negative values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeNormal.x;
	expected = negativeNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to small negative values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSmall.x;
	expected = negativeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to tiny negative values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeTiny.x;
	expected = negativeTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to subnormal negative values, the function returns corresponding single-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSubnormal.x;
	expected = negativeSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.equal( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});