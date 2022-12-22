const palindromes = function (str) {
    let revStr="";
    for(let i=str.length-1;i>=0;i--){
        revStr+=str.charAt(i);
    }
    if (str === revStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
