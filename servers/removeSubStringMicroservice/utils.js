module.exports = (text, sub) => {
    const regEx = new RegExp(sub, "g");
    return text.replace(regEx, "");
}