simple-math
====

A small library that provides very simple mathematical functions.

## Installation

`npm install simple-math --save`

## Usage

```javascript
var simple-math = require('simple-math'),
	add = simple-math.add,
	subtract = simple-math.subtract;

// Add two numbers
var sum = add(3,5);
console.log(sum);
//=> 8

// Subtract one number from another
var diff = subtract(5,3);
console.log(diff);
//=> 2

```
