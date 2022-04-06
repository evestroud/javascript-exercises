const removeFromArray = function(array) {
  for (i = 1; i < arguments.length; i ++) {
    array = array.filter(item => item !== arguments[i]);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
