const findTheOldest = function(arrObj) {
    let result={
        name:"",
        age:-1
    }
    arrObj.forEach(element => {
        if(element.death === ""){
            
            const date=new Date;
            let age=date.getFullYear()-element.birth;
            if(age>result.age){
                result.name=element.name;
                result.age=age;
            }
        }else{
            let age=element.death-element.birth;
            if (age>result.age) {
                result.age=age;
                result.name=element.name;
            }
        }
    });

    return result.name;
};


// Do not edit below this line
module.exports = findTheOldest;
