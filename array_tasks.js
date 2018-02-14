const arrayTasks = {

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
  },

  square: function (arr) {
    const newArray = arr.map( function (number) {
      return Math.pow(number, 2);
    });
    return newArray;
  },

  // sum: function (arr) {

  // },

  // removeAndClone: function (arr, valueToRemove) {

  // },

  // findIndexesOf: function (arr, itemToFind) {

  // },

  // sumOfAllEvenNumbersSquared: function (arr) {

  // }

  // ----------- EXTENSION ------------

  // findDuplicates: function (arr) {

  // },

};

module.exports = arrayTasks;
