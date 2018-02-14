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

  sum: function (arr) {
    return arr.reduce( function (runningTotal, currentItem) {
      return runningTotal + currentItem;
    }, 0);
  },

  removeAndClone: function (arr, valueToRemove) {
    const newArray = arr.filter( function (number) {
      return number !== valueToRemove;
    });
    return newArray;
  },

  findIndexesOf: function (arr, itemToFind) {
    const newArray = [];
    arr.forEach( function (number, index) {
      if (number === itemToFind){
        newArray.push(index);
      }
    });
    return newArray;
  },

  // sumOfAllEvenNumbersSquared: function (arr) {

  // }

  // ----------- EXTENSION ------------

  // findDuplicates: function (arr) {

  // },

};

module.exports = arrayTasks;
