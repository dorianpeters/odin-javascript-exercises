const palindromes = function (inputString) {
    filtered = filterString(inputString);
    reversed = filtered.split('').reverse().join('');
    if (filtered === reversed) return true;
    else return false;

};

const filterString = function (input) { 
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        if ((/[a-zA-Z0-9]/).test(char)) {
            result += char;
        }
    }
    return result;
}
// Do not edit below this line
module.exports = palindromes;
