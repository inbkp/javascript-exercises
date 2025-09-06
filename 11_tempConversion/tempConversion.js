const convertToCelsius = function(c) {
  //Second try using just using return:
  return Math.round((c - 32) * (5 / 9) * 10) / 10;


  //First try:
  //const celcius = (c - 32) * 5/9;
  //return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(f) {
  //Second try using just using return:
  return Math.round((f * (9 / 5) + 32) * 10) / 10;

  //First try:
  //const fahrenheit = f * (9/5) + 32;
  //return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
