const removeFromArray = function(array, ...removeArgs) {
  return array.filter(item => !removeArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
