const repeatString = function (word, time) {
    let string = "";
    for (let i = 0; i < time; i++) {
        string += word ;
    }
    if (time < 0) return "ERROR";
    return string;
};

// Do not edit below this line
module.exports = repeatString;
