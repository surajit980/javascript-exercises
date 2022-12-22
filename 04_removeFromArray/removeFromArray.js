const removeFromArray = function(arr,element) {
    let resultArr=[];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === element) {
            continue;
        }
        resultArr.push(arr[index]);
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
