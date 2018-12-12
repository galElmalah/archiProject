const changeFirstLetterToUpperCase = (char, i) =>
  i === 0 ? char.toUpperCase() : char;

const capitalizeWord = word =>
  word
    .split("")
    .map(changeFirstLetterToUpperCase)
    .join("");

module.exports = text =>
  text
    .split(" ")
    .map(capitalizeWord)
    .join(" ");
