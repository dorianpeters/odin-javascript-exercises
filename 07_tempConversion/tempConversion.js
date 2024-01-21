const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  cTempRounded = +cTemp.toFixed(1);
  return cTempRounded;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  fTempRounded = +fTemp.toFixed(1);
  return fTempRounded;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
