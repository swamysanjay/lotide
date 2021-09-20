# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @swamswams/lotide`

**Require it:**

`const _ = require('@swamswams/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function 1(assertArraysEqual)`: Asserts whether two arrays are equal or not.
* `function 2(assertEqual)`: Asserts whether two primitive data types are equal.
* `function 3(assertObjectsEqual)`: Asserts whether two objects are equal.
* `function 4(countLetters)`: Returns an object where each unique character in a string is a key.
* `function 5(countOnly)`: Returns an object containing everything in an array.
* `function 6(eqArrays)`: Compares the data of two arrays to check whether they're equal or not.
* `function 7(eqObjects)`: Compares the data of two objects to check whether they're equal or not.
* `function 8(findKey)`: The function takes a callback and returns the first key if the callback returns true.
* `function 9(findKeyByValue)`: Takes an object and a value and returns the first key containing the given value.
* `function 10(head)`: Returns the first value of the array.
* `function 11(letterPositions)`: Returns the first value of the array.
* `function 12(map)`: Returns an array according to the given callback function.
* `function 13(middle)`: Returns the middle value of the array.
* `function 14(tail)`: Returns the last value of the array.
* `function 15(takeUntil)`: Returns all elements in an array and callback function until satisfied.
* `function 16(without)`: Returns an array without excluded elements when given an array and list.