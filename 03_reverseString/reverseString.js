const reverseString = function(string) {
  let split = string.split("");
  let newString = "";
  for (let i = split.length - 1; i >= 0; i--) {
    newString += split[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
