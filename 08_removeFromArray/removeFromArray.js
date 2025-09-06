const removeFromArray = function(arr, ...args) {
    //Second try using .reduce function:
    return arr.reduce((acc, current) => { if (!args.includes(current)) {acc.push(current);} return acc;}, []);

    //First try:
    //let newArr = [];
    //for (let i=0;i<arr.length;i++)
    //{
    //    if (!args.includes(arr[i]))
    //    {
    //        newArr.push(arr[i]);
    //    }
    //}
    //return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
