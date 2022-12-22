const getTheTitles = function(arrObj) {
    let result=[];
    arrObj.forEach((item)=>result.push(item.title));
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
