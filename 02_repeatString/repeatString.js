const repeatString = function(str,times) {
    let result="";
    if (times <= 1) {
        return str;
    }
    for (let index = 0; index < times; index++) {
        result+=str;
    }
    return result;
}
// Do not edit below this line
module.exports = repeatString;
