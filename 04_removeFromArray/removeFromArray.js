const removeFromArray = function(array) {
  const newArray = [];
  for (item of array) {
    let match = false;
    for (i = 1; i < arguments.length; i ++) {
      if (item === arguments[i]) match = true;
    }
    if (!match) newArray.push(item);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
