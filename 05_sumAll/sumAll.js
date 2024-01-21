const sumAll = function(low, high) {
    // Error checking
    if ((!Number.isSafeInteger(low)) || (!Number.isSafeInteger(high)) || 
    (low < 0) || (high < 0))
        return "ERROR"
    if (low > high)
        [low, high] = [high, low];

    // Calculate sum
    let sum = 0;
    current = low;
    while (current <= high) {
      sum += current;
      current++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
