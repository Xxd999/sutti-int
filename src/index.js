var roundDate = require("round-date");

/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} - Random integer.
 */
function getRandomInt(min, max) {
  var roundedDate = roundDate.round(45 * 60, new Date());  min = Math.ceil(min);
  console.log(roundedDate);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = getRandomInt;
