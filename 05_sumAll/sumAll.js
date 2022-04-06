const sumAll = function(x, y) {
  if (typeof x != "number" || typeof y != "number" || x < 0 || y < 0) {
    return "ERROR";
  }
  let larger = (x >= y) ? x : y;
  let smaller = (x < y) ? x : y;
};

// Do not edit below this line
module.exports = sumAll;
