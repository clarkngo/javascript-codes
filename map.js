/*

Underscore and lodash contain a method called map, which operates very similar 
to the map method in ruby. In this challenge, you will implement this method.


In order to implement this method, you'll need to fully understand 
an important feature of JavaScript that is the basis of how most programs 
in JavaScript work: first class functions.

First class functions allow you to pass through functions as variables 
to functions and then call the function within the initial method. 
We covered this topic early in the JavaScript overview videos, 
but it's a very important topic in JavaScript.

This problem requires you fully understand callbacks.


*/


"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#map
  map: (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
    return array;
  }
}

// Define a method that multiplies the input by 10
function multiplyBy10(value) {
  return 10 * value;
}
const value = _.map([1, 2, 3], multiplyBy10);


// value => [10, 20, 30]
console.log(value);

