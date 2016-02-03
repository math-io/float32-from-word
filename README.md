fromWord
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a [single-precision floating-point number][ieee754] from an unsigned integer corresponding to an [IEEE 754][ieee754] binary representation.


## Installation

``` bash
$ npm install math-float32-from-word
```


## Usage

``` javascript
var fromWord = require( 'math-float32-from-word' );
```

#### fromWord( x )

Creates a [single-precision floating-point number][ieee754] from an unsigned `integer` corresponding to an [IEEE 754][ieee754] binary representation.

``` javascript
var word = 1068180177; // => 0 01111111 01010110010001011010001

var f32 = fromWord( word );
// returns 1.3370000123977661 (note: when printed, implicitly promoted to float64)
```


## Notes

* The equivalent of this `function` in C/C++,

	``` c
	float fromWord(unsigned int x) {
	  return *(float*)&x;
	}
	``` 


## Examples

``` javascript
var round = require( 'math-round' );
var MAX_UINT32 = require( 'const-max-uint32' );
var fromWord = require( 'math-float32-from-word' );

var word;
var f32;
var i;

// Create single-precision floating-point numbers from unsigned integers...
for ( i = 0; i < 1000; i++ ) {
	word = round( Math.random()*MAX_UINT32 );
	f32 = fromWord( word );
	console.log( 'word: %d => float32: %d', word, f32 );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-float32-from-word.svg
[npm-url]: https://npmjs.org/package/math-float32-from-word

[build-image]: http://img.shields.io/travis/math-io/float32-from-word/master.svg
[build-url]: https://travis-ci.org/math-io/float32-from-word

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/float32-from-word/master.svg
[coverage-url]: https://codecov.io/github/math-io/float32-from-word?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/float32-from-word.svg
[dependencies-url]: https://david-dm.org/math-io/float32-from-word

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/float32-from-word.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/float32-from-word

[github-issues-image]: http://img.shields.io/github/issues/math-io/float32-from-word.svg
[github-issues-url]: https://github.com/math-io/float32-from-word/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985