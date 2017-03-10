'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = base;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  someObjsContainProp: (arr, prop) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].hasOwnProperty(prop)){
        return true;
      }
    }
    return false;
  },

  convertNameArrayToObject: (arr) => {
    return arr.map((subArr) => {
      var obj = {
        first: subArr[0],
        last: subArr[1]
      }
      return obj
    })
  },

  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  stringMatch: (arr, str) => {
    return arr.filter((val) => {
      return val.includes(str)
    });
  },
};
