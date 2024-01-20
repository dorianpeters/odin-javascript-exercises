const reverseString = function(inputString) {
    chars = inputString.split('');
    reversedChars = chars.reverse();
    let result = "";
    for (let i = 0; i < reversedChars.length; i++)
        result += reversedChars[i];
    return result;
};

module.exports = reverseString;
