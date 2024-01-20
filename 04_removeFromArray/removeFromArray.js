const removeFromArray = function(array, ...removeArgs) {
  const filteredArray = array.filter(item => !removeArgs.includes(item));
  console.log(array)
  console.log(removeArgs)
  console.log(filteredArray)
  return filteredArray;
};

// removeFromArray([1,2,3,4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
