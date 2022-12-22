const fibonacci = function(count) {
    let fnum=0;
    let snum=1;
    let result;
    
    if(count === 1){
        result=1;
    }
    
    while(count > 1){
        result=fnum+snum;
        fnum=snum;
        snum=result;
        count--;
    }
    return result;
};
// Do not edit below this line
module.exports = fibonacci;
