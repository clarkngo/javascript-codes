"use strict"

var _ = {
  // implements
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    // write code to implement method here
    return array.join(separator);
  }
}

const value = _.join(["hello", "goodbye"], ", ")

console.log(value);
