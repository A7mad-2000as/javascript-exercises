const ftoc = function(fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return Number(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let fahrenheit = (9 / 5) * celsius + 32;

  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
