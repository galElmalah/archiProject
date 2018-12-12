module.exports = text =>
  text[text.trim().length - 1] === "." ? text.trim() : text.trim().concat(".");
