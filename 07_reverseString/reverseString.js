const reverseString = function(str) {
let revers = "";
for (let i = str.length - 1;i >= 0;i--) {
    revers += str[i];
}

return revers;
};

// Do not edit below this line
module.exports = reverseString;
